build:
	yarn install
	yarn build
	docker build -t ghpwa .
	docker login docker.pkg.github.com --username richistron -p $(SECRET)
	docker tag ghpwa docker.pkg.github.com/richistron/ghpwa/ghpwa
	docker push docker.pkg.github.com/richistron/ghpwa/ghpwa