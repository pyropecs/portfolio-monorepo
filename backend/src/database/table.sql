-- to create a table in particular database

create table IF NOT EXISTS blogs (
        blog_id serial primary key,
        title varchar(50) not null,
        content text not null,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        published boolean default FALSE

);

