import sys
import logging
import pymysql
import os
import json
import boto3


db_name = "webforum"
db_port = 3306
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# ssm_client = boto3.client('ssm')
# response = ssm_client.get_parameter(
#     Name='web-forum-database',
#     WithDecryption=True
# )
db_password = "WDE1fu0SMlRgpPJg3Psm"


try:
    conn = pymysql.connect(
        user="admin", password=db_password, host="devopsthreads.cxucy7v6bbz2.us-east-1.rds.amazonaws.com",
        port=db_port, database=db_name)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()
logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")


def apiPut(event, context):
    """
    This function posts content to a MySQL RDS instance
    """
    try:
        event_body = json.loads(event['body'])
        body = event_body['body']
        title = event_body['title']
        with conn.cursor() as cur:
            cur.execute("create table if not exists thread ( id int NOT NULL AUTO_INCREMENT, title varchar(255) NOT NULL, body varchar(255) NOT NULL, PRIMARY KEY (id))")
            cur.execute("INSERT INTO thread (title, body) VALUES (%s, %s)", (title, body))
        conn.commit()
        statusCode = 200
    except Exception as e:
        logger.error('Fatal exception occurred.', exc_info=e)
        statusCode = 500
    return {
        "statusCode": statusCode,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,PUT"
        }
    }
