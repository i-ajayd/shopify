# README
Project Name: Gurzu-Shopify

* Ruby version
  `-v 3.0.1`

* Rails version
  `-v 6.1.3`

* System dependencies
    `docker`
    `docker-compose`

* Services (job queues, cache servers, search engines, etc.)
    - ActiveJob
    - Resque
    - Mailhog

* Configuration

## Installation
* Initial Setup
  ```bash
		cp .env.example .env
  ```
	- get path to current project directory 
	```bash
		pwd
	```
	- run pwd in bash to get path to current dir. Copy path and set it in `DOCKER_HOST_PATH` in .env
	- Set `master.key`
		```bash
			touch config/master.key
		```
		- master.key example. `fhjdajkf90kfdajadsf`
		- copy the master key and paste it the `master.key` file.

* Launch/RUN Docker Container
	```bash
		docker-compose up --build
	```
	- Follow logs
	```bash
		docker-compose logs -f	
	```
  - Access currently running rails web console
		```bash
      docker-compose exec web bash
		```
	- Database Setup (inside the rails web console)
		```ruby
			rails db:setup
		```

	
## After Initial Setup

* Launch
	```bash
    docker-compose up
	```

* Launch Shell(rails bash )
	```bash
    docker-compose exec web bash
	```
	 or
	```bash
    docker exec -it gurzu-shopify_web_1 bash 
	```
		(rails command and console can be accessed in usual way from bash)

* Run Migration
	```bash
		docker-compose exec web bash
	```
	```ruby
		rails db:migrate
	```

* Reset Database
	```bash
		docker-compose exec web bash
	```
	```ruby
		rails db:drop && rails db:create && rails db:migrate
	```
	- to seed dummy data
	```ruby
		rails db:dummy
	```
	- to seed regular data
	```ruby
		rails db:seed
	```
	
* How to access mail
	```bash
		localhost:8025
	```

* How to run the test suite
	```bash
    docker-compose exec web bash
	```
	, and in bash: 
	```bash
		rspec spec
	```

* Run rails app in debug mode to enable pry and byebug
	```bash
		docker-compose run --service-ports web
	```

* in case of error
    - error_type :webpacker issue
		```bash
    	docker-compose run web rails webpacker:install
		```

## CI/CD
* Deployment instructions
