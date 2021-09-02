
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
DROP TABLE IF EXISTS grammer_table;
DROP TABLE IF EXISTS phrase_table;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS word_table;




/* Create Tables */

CREATE TABLE book_table
(
	book_id bigserial NOT NULL,
	book_name_translate varchar(255),
	book_name_orignal varchar(255),
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (book_id)
) WITHOUT OIDS;


CREATE TABLE code_table
(
	code_id bigserial NOT NULL,
	code_no varchar(4),
	code_item text,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (code_id)
) WITHOUT OIDS;

CREATE TABLE favourites_table
(
	favourites_id bigserial NOT NULL,
	user_id bigint NOT NULL,
	record_id xml,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (favourites_id)
) WITHOUT OIDS;


CREATE TABLE grammer_table
(
	grammer_id bigserial NOT NULL,
	grammer_title text,
	grammer text,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (grammer_id)
) WITHOUT OIDS;


CREATE TABLE lesson_table
(
	book_id bigint NOT NULL,
	lesson_id bigserial NOT NULL,
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
	phrase_type varchar(4),
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
	grammer_id bigint NOT NULL,
	sentence_seq bigint NOT NULL,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (grammer_id, sentence_seq)
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
	lesson_id bigint NOT NULL,
	line_no bigserial,
	sentence_type varchar(4),
	sentence_name_translate text,
	sentence_name_orignal text,
	description text,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (sentence_seq),
	CONSTRAINT sentence_information_key UNIQUE (book_id, lesson_id, line_no, sentence_type)
) WITHOUT OIDS;


CREATE TABLE sentence_word_table
(
	word_id bigint NOT NULL,
	sentence_seq bigint NOT NULL,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (word_id, sentence_seq)
) WITHOUT OIDS;


CREATE TABLE user_info
(
	user_id bigserial NOT NULL,
	user_name varchar(20),
	password varchar(255),
	authority int NOT NULL,
	password_history varchar(255),
	description text,
	picture text,
	email varchar(20),
	mobile varchar(20),
	last_login timestamp,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (user_id)
) WITHOUT OIDS;


CREATE TABLE user_practice_history
(
	history_id bigserial NOT NULL,
	user_id bigint NOT NULL,
	sentence_seq bigint NOT NULL,
	favourites_flg boolean,
	mistakes_flg boolean,
	mistake_count bigint,
	creater varchar(20),
	create_time timestamp,
	updater varchar(20),
	update_time timestamp,
	PRIMARY KEY (history_id),
	CONSTRAINT history_information UNIQUE (user_id, sentence_seq)
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
	ADD FOREIGN KEY (grammer_id)
	REFERENCES grammer_table (grammer_id)
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



