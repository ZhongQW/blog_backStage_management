create table user(
    userId int not null auto_increment  PRIMARY KEY,
    userName varchar(40) not null,
    userPassword varchar(70) not null
);
create table article(
    articleId int not null PRIMARY KEY auto_increment,
    articleType char(4) not null,
    articleContent text not null
);
create table words(
    wordsId int not null auto_increment  PRIMARY KEY,
    wordsName varchar(40) not null,
    wordsEmil varchar(30) not null,
    wordsType varchar(4) not null,
    wordsContent text not null
);
create table owner(
    nickname  varchar(50) not null,
    name varchar(50) not null,
    titile varchar(70) not null,
    birth date not null,
    sex varchar(12) not null check(sex in ('男','女')),
    email varchar(60) not null,
    job varchar(50) not null,
    address varchar(100) not null,
    motto varchar(200) not null
);