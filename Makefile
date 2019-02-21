BUCKET := cf-templates-12nfu9x8emrvi-us-east-1
STACK_NAME := random-pw-generator

#.PHONY

all: package deploy helper

package:
	aws cloudformation package --template-file ./template.yaml --s3-bucket $(BUCKET) --output-template-file output.yaml

deploy:
	aws cloudformation deploy --template-file ./output.yaml --stack-name $(STACK_NAME) --capabilities CAPABILITY_IAM

helper:
	@echo "to generate a password go to"
	aws cloudformation describe-stacks --stack-name $(STACK_NAME) --query 'Stacks[0].Outputs[0].OutputValue'
