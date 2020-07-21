create-image:
	docker build -t wallmart-front .
run-local-image:
	docker run -it -p 3000:3000 wallmart-front
