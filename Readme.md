# Execução da aplicação

1. Rodar o docker-compose
```bash
docker-compose up -d --build
```

2. Cidades

- Update

```bash
curl --request PATCH \
  --url http://localhost:3333/city/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"name":"Santa Maria - Boca do Monte",
	"state":"RS"
}'
```

- Post
```bash
curl --request POST \
  --url http://localhost:3333/city \
  --header 'Content-Type: application/json' \
  --data '{
	"name":"Santa Rosa",
	"state":"RS"
}'
```

- DELETE
```bash
curl --request DELETE \
  --url http://localhost:3333/city/1
```

- FIND BY ID
```bash
curl --request GET \
  --url http://localhost:3333/city \
  --header 'Content-Type: application/json'
```

- FIND FILTER

```bash
curl --request GET \
  --url http://localhost:3333/city \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Rosa",
	"state": "RS"
}'
```

3. Cliente

- Update

```bash
curl --request PATCH \
  --url http://localhost:3333/client/3 \
  --header 'Content-Type: application/json' \
  --data '{
  "name_full": "H Sauzem",
  "gender": "M",
  "birthday_date": "1990-11",
  "age": "30",
  "city_id": "3"
}'
```

- Post
```bash
curl --request POST \
  --url http://localhost:3333/client \
  --header 'Content-Type: application/json' \
  --data '{
	"name_full":"L Sauzem",
	"gender":"J",
	"birthday_date":"1990-07-07",
	"age":"30",
	"city_id":"1"
}'
```

- DELETE
```bash
curl --request DELETE \
  --url http://localhost:3333/client/1
```

- FIND BY ID
```bash
curl --request GET \
  --url http://localhost:3333/client/1
```

- FIND FILTER

```bash
curl --request GET \
  --url http://localhost:3333/client \
  --header 'Content-Type: application/json' \
  --data '{
	"name_full": "H"
}'
```