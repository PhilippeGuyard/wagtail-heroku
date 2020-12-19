
# WAGTAIL CMS / HEROKU / S3 BOILERPLATE

## IMPORTANT IF USING DJANGO-STORAGES: USE staticfiles=False ##
django_heroku.settings(locals(), staticfiles=False)

With django-storages: add 
AWS_DEFAULT_ACL = None


## BUCKET POLICY: ##

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::[ACCOUNT]:[USER]/[BUCKET NAME]]"
            },
            "Action": [
                "s3:PutObject",
                "s3:GetObjectAcl",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::[BUCKET NAME]/*",
                "arn:aws:s3:::[BUCKET NAME]"
            ]
        }
    ]
}

## CORS Policy: ##

[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE"
        ],
        "AllowedOrigins": [
            "https://pguyard-blog.herokuapp.com"
        ],
        "ExposeHeaders": []
    },
    {
        "AllowedHeaders": [],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]


https://stackoverflow.com/questions/63392426/how-to-use-tailwindcss-with-django

https://geekflare.com/nodejs-installation-guide/

https://github.com/bradlc/tailwindcss-fluid