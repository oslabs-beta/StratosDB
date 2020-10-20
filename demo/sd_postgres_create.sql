CREATE TABLE public.owners (
	"_id" serial NOT NULL,
	"email" varchar UNIQUE NOT NULL,
	"firstName" varchar (50) NOT NULL,
	"lastName" varchar (50) NOT NULL,
	"password" varchar NOT NULL,
	"address_id" bigint NOT NULL,
	CONSTRAINT "owners_pk" PRIMARY KEY ("_id")
	) WITH (
	OIDS=FALSE
);

CREATE TABLE public.address (
	"_id" serial NOT NULL,
	"zipcode" integer NOT NULL,
	"street" varchar NOT NULL,
	"city" varchar NOT NULL,
	"state" varchar NOT NULL,
	CONSTRAINT "address_pk" PRIMARY KEY ("_id")
	) WITH (
	OIDS=FALSE
);

CREATE TABLE public.dogs (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"breed" varchar NOT NULL,
	"age" int NOT NULL,
	"owner_id" int NOT NULL,
	CONSTRAINT "dogs_pk" PRIMARY KEY ("_id")
	) WITH (
	OIDS=FALSE
);

CREATE TABLE public.cats (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"breed" varchar NOT NULL,
	"age" int NOT NULL,
	"owner_id" bigint NOT NULL,
		CONSTRAINT "cats_pk" PRIMARY KEY ("_id")
	) WITH (
	OIDS=FALSE
);

ALTER TABLE public.owners ADD FOREIGN KEY ("address_id") REFERENCES public.address("_id");
ALTER TABLE public.cats ADD FOREIGN KEY ("owner_id") REFERENCES public.owners("_id");
ALTER TABLE public.dogs ADD FOREIGN KEY ("owner_id") REFERENCES public.owners("_id");

INSERT INTO public.address VALUES (1, 92663, '123 daisy lane', 'oc', 'california');
INSERT INTO public.address VALUES (2, 92663, '123 orchid lane', 'los angeles', 'california');
INSERT INTO public.address VALUES (3, 92663, '123 lily lane', 'sb', 'california');
INSERT INTO public.address VALUES (4, 92663, '123 basil lane', 'nyc', 'ny');
INSERT INTO public.address VALUES (5, 92663, '123 rose avenue', 'san diego', 'california');

INSERT INTO public.owners VALUES (1, 'sp@gmail.cocm', 'Sophia', 'Pak', 'helloworld123', 1);
INSERT INTO public.owners VALUES (2, 'jk@gmail.com', 'Joal', 'Kim', 'helloworld456', 2);
INSERT INTO public.owners VALUES (3, 'ts@gmail.com', 'Tommy', 'Song', 'helloworld789', 3);
INSERT INTO public.owners VALUES (4, 'tm@gmail.com', 'Tyler', 'Morgan', 'helloworld0-=', 4);
INSERT INTO public.owners VALUES (5, 'ns@gmail.com', 'Nicholas', 'Shay', 'helloworld321', 5);

INSERT INTO public.dogs VALUES (1, 'Pancake', 'Pembroke Welsh Corgi', 6, 1);
INSERT INTO public.dogs VALUES (2, 'Honey', 'Pembroke Welsh Corgi', 1, 1);
INSERT INTO public.dogs VALUES (3, 'Oreo', 'NEED TO CONFIRM', 4, 2);
INSERT INTO public.dogs VALUES (4, 'Rex', 'Belgian Malinois', 5, 1);
INSERT INTO public.dogs VALUES (5, 'Duke', 'Pembroke Welsh Corgi', 7, 5);

INSERT INTO public.cats VALUES (1, 'Mr. Flufflers', 'Ragdoll', 1, 3);
INSERT INTO public.cats VALUES (2, 'Mr. Pickles', 'British Short Hair', 2, 5);

SELECT setval('public.owners__id_seq', 6, false);
SELECT setval('public.address__id_seq', 6, false);
SELECT setval('public.dogs__id_seq', 6, false);
SELECT setval('public.cats__id_seq', 3, false);