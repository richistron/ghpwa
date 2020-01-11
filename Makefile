VERSION := $(shell node getVersion.js)

clean:
	rm -rf build

build:
	yarn install
	yarn build
	docker build -t ghpwa .
	docker login docker.pkg.github.com --username richistron -p $(SECRET)
	docker tag ghpwa docker.pkg.github.com/richistron/ghpwa/ghpwa:$(VERSION)
	docker tag ghpwa docker.pkg.github.com/richistron/ghpwa/ghpwa:latest
	docker push docker.pkg.github.com/richistron/ghpwa/ghpwa:$(VERSION)
	docker push docker.pkg.github.com/richistron/ghpwa/ghpwa:latest
