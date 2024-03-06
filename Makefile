.PHONY: .env.dist .env

.env:
	cp -r .env.dist .env

init: .env
	sed "s|\$${NUXT_UI_PRO_LICENSE}|${NUXT_UI_PRO_LICENSE}|g;" -i $$(pwd)/.env
init-mac: .env
	gsed "s|\$${NUXT_UI_PRO_LICENSE}|${NUXT_UI_PRO_LICENSE}|g;" -i $$(pwd)/.env
