
/* Drop Tables */

DROP TABLE IF EXISTS sentence_grammer_table;
DROP TABLE IF EXISTS sentence_phrase_table;
DROP TABLE IF EXISTS sentence_word_table;
DROP TABLE IF EXISTS user_practice_history;
DROP TABLE IF EXISTS sentence_table;
DROP TABLE IF EXISTS lesson_table;
DROP TABLE IF EXISTS book_table;
DROP TABLE IF EXISTS code_table;
DROP TABLE IF EXISTS favourites_table;
DROP TABLE IF EXISTS grammar_table;
DROP TABLE IF EXISTS phrase_table;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS word_table;




/* Create Tables */

CREATE TABLE book_table
(
	book_id bigserial NOT NULL,
	book_name varchar(255),
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (book_id)
) WITHOUT OIDS;


CREATE TABLE code_table
(
	code_id int NOT NULL,
	code_no varchar(4),
	description text,
	PRIMARY KEY (code_id)
) WITHOUT OIDS;


CREATE TABLE favourites_table
(
	favourites_id serial NOT NULL,
	user_id int NOT NULL,
	favourites_info xml,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (favourites_id)
) WITHOUT OIDS;


CREATE TABLE grammar_table
(
	grammar_id bigserial NOT NULL,
	grammer_title text,
	grammer text,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (grammar_id)
) WITHOUT OIDS;


CREATE TABLE lesson_table
(
	book_id bigint NOT NULL,
	lesson_id serial NOT NULL,
	lesson_name_translate varchar(40),
	lesson_name_orignal varchar(40),
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (book_id, lesson_id)
) WITHOUT OIDS;


CREATE TABLE phrase_table
(
	phrase_id bigserial NOT NULL,
	phrase_name_translate text,
	phrase_name_orignal text,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (phrase_id)
) WITHOUT OIDS;


CREATE TABLE sentence_grammer_table
(
	grammar_id bigint NOT NULL,
	sentence_seq bigint NOT NULL,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (grammar_id, sentence_seq)
) WITHOUT OIDS;


CREATE TABLE sentence_phrase_table
(
	phrase_id bigint NOT NULL,
	sentence_seq bigint NOT NULL,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (phrase_id, sentence_seq)
) WITHOUT OIDS;


CREATE TABLE sentence_table
(
	sentence_seq bigserial NOT NULL,
	book_id bigint NOT NULL,
	lesson_id int NOT NULL,
	sentence_type varchar(4) NOT NULL,
	line_no bigint NOT NULL,
	sentence_name_translate text,
	sentence_name_orignal text,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (sentence_seq)
) WITHOUT OIDS;


CREATE TABLE sentence_word_table
(
	sentence_seq bigint NOT NULL,
	word_id bigint NOT NULL,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (sentence_seq, word_id)
) WITHOUT OIDS;


CREATE TABLE user_info
(
	user_id serial NOT NULL,
	user_name varchar(20),
	old_password varchar(255),
	password varchar(255),
	authority int NOT NULL,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (user_id)
) WITHOUT OIDS;


CREATE TABLE user_practice_history
(
	history_id serial NOT NULL,
	user_id int NOT NULL,
	sentence_seq bigint NOT NULL,
	mistake_count bigint,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (history_id),
	CONSTRAINT mistake_key UNIQUE (user_id, sentence_seq)
) WITHOUT OIDS;


CREATE TABLE word_table
(
	word_id bigserial NOT NULL,
	word_name_translate text,
	word_name_orignal text,
	word_type xml,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (word_id)
) WITHOUT OIDS;



/* Create Foreign Keys */

ALTER TABLE lesson_table
	ADD FOREIGN KEY (book_id)
	REFERENCES book_table (book_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_grammer_table
	ADD FOREIGN KEY (grammar_id)
	REFERENCES grammar_table (grammar_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_table
	ADD FOREIGN KEY (book_id, lesson_id)
	REFERENCES lesson_table (book_id, lesson_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_phrase_table
	ADD FOREIGN KEY (phrase_id)
	REFERENCES phrase_table (phrase_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_grammer_table
	ADD FOREIGN KEY (sentence_seq)
	REFERENCES sentence_table (sentence_seq)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_phrase_table
	ADD FOREIGN KEY (sentence_seq)
	REFERENCES sentence_table (sentence_seq)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_word_table
	ADD FOREIGN KEY (sentence_seq)
	REFERENCES sentence_table (sentence_seq)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE user_practice_history
	ADD FOREIGN KEY (sentence_seq)
	REFERENCES sentence_table (sentence_seq)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE favourites_table
	ADD FOREIGN KEY (user_id)
	REFERENCES user_info (user_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE user_practice_history
	ADD FOREIGN KEY (user_id)
	REFERENCES user_info (user_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE sentence_word_table
	ADD FOREIGN KEY (word_id)
	REFERENCES word_table (word_id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



