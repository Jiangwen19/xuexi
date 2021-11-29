/*
 Navicat Premium Data Transfer

 Source Server         : japan_study
 Source Server Type    : PostgreSQL
 Source Server Version : 90616
 Source Host           : localhost:5432
 Source Catalog        : japan_study
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 90616
 File Encoding         : 65001

 Date: 30/11/2021 00:39:49
*/


-- ----------------------------
-- Sequence structure for book_table_book_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."book_table_book_id_seq";
CREATE SEQUENCE "public"."book_table_book_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for code_table_code_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."code_table_code_id_seq";
CREATE SEQUENCE "public"."code_table_code_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for favourites_table_favourites_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."favourites_table_favourites_id_seq";
CREATE SEQUENCE "public"."favourites_table_favourites_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for front_menu_table_front_menu_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."front_menu_table_front_menu_id_seq";
CREATE SEQUENCE "public"."front_menu_table_front_menu_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grammer_table_grammer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grammer_table_grammer_id_seq";
CREATE SEQUENCE "public"."grammer_table_grammer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for lesson_table_lesson_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."lesson_table_lesson_id_seq";
CREATE SEQUENCE "public"."lesson_table_lesson_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for phrase_table_phrase_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."phrase_table_phrase_id_seq";
CREATE SEQUENCE "public"."phrase_table_phrase_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for role_menu_table_role_menu_table_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."role_menu_table_role_menu_table_seq";
CREATE SEQUENCE "public"."role_menu_table_role_menu_table_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 129
CACHE 1;

-- ----------------------------
-- Sequence structure for role_table_role_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."role_table_role_id_seq";
CREATE SEQUENCE "public"."role_table_role_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sentence_grammer_table_sentence_grammer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sentence_grammer_table_sentence_grammer_id_seq";
CREATE SEQUENCE "public"."sentence_grammer_table_sentence_grammer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sentence_phrase_table_sentence_phrase_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sentence_phrase_table_sentence_phrase_id_seq";
CREATE SEQUENCE "public"."sentence_phrase_table_sentence_phrase_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sentence_table_sentence_seq_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sentence_table_sentence_seq_seq";
CREATE SEQUENCE "public"."sentence_table_sentence_seq_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for sentence_word_table_sentence_word_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sentence_word_table_sentence_word_id_seq";
CREATE SEQUENCE "public"."sentence_word_table_sentence_word_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_info_user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_info_user_id_seq";
CREATE SEQUENCE "public"."user_info_user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_practice_history_history_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_practice_history_history_id_seq";
CREATE SEQUENCE "public"."user_practice_history_history_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_role_table_user_role_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_role_table_user_role_id_seq";
CREATE SEQUENCE "public"."user_role_table_user_role_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for word_table_word_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."word_table_word_id_seq";
CREATE SEQUENCE "public"."word_table_word_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for book_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."book_table";
CREATE TABLE "public"."book_table" (
  "book_id" int8 NOT NULL DEFAULT nextval('book_table_book_id_seq'::regclass),
  "book_name_translate" varchar(255) COLLATE "pg_catalog"."default",
  "book_name_orignal" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6),
  "book_number" int8 NOT NULL
)
;
ALTER TABLE "public"."book_table" OWNER TO "postgres";

-- ----------------------------
-- Records of book_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."book_table" VALUES (1, '大家的日本语', 'みんなの日本語', '大家的日本语', NULL, NULL, NULL, NULL, 3);
INSERT INTO "public"."book_table" VALUES (2, '你的日本语', '貴方の日本語', '你的日本语', NULL, NULL, NULL, NULL, 2);
INSERT INTO "public"."book_table" VALUES (4, '大家的英语', 'everyone''s english', '大家的英语', NULL, NULL, NULL, NULL, 5);
INSERT INTO "public"."book_table" VALUES (5, '我的英语', 'my english', '我的英语', NULL, NULL, NULL, NULL, 4);
INSERT INTO "public"."book_table" VALUES (9, 'gelintonghua', '格林童话', 'gelintonghua童话', 'jiangwen', '2021-11-19 10:01:02.98107', NULL, NULL, 7);
INSERT INTO "public"."book_table" VALUES (16, '庄子', '庄子', '庄子', 'jiangwen', '2021-11-21 09:58:36.082588', 'jiangwen', '2021-11-21 09:58:43.911062', 18);
INSERT INTO "public"."book_table" VALUES (3, '我的日本语123', 'わたしの日本語', '我的日本语', NULL, NULL, 'jiangwen', '2021-11-21 10:13:19.144831', 1);
INSERT INTO "public"."book_table" VALUES (12, 'daodejing', '道德经', '老子', 'jiangwen', '2021-11-19 10:02:29.613741', 'test', '2021-11-22 02:50:37.785053', 16);
INSERT INTO "public"."book_table" VALUES (11, 'zhijian', '之江新语', 'zhijiangxinyu', 'jiangwen', '2021-11-19 10:02:09.383253', 'jiangwen', '2021-11-22 05:09:35.368486', 10);
INSERT INTO "public"."book_table" VALUES (20, '脱贫攻坚', '脱贫攻坚', '脱贫攻坚是场持久战', 'jiangwen', '2021-11-22 06:16:31.590688', NULL, NULL, 66);
INSERT INTO "public"."book_table" VALUES (19, '走进新时代', '改革开放', '', 'jiangwen', '2021-11-22 05:11:04.923828', 'jiangwen', '2021-11-30 00:32:26.597797', 65);
COMMIT;

-- ----------------------------
-- Table structure for code_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."code_table";
CREATE TABLE "public"."code_table" (
  "code_id" int8 NOT NULL DEFAULT nextval('code_table_code_id_seq'::regclass),
  "code_no" varchar(4) COLLATE "pg_catalog"."default" NOT NULL,
  "code_item" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."code_table" OWNER TO "postgres";

-- ----------------------------
-- Records of code_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."code_table" VALUES (1, '0001', '例文', '句子类型为例文', NULL, NULL, NULL, NULL);
INSERT INTO "public"."code_table" VALUES (2, '0002', '对话', '句子类型为对话', NULL, NULL, NULL, NULL);
INSERT INTO "public"."code_table" VALUES (3, '0003', '练习', '句子类型为练习', NULL, NULL, NULL, NULL);
INSERT INTO "public"."code_table" VALUES (4, '0004', '拓展', '句子类型为拓展', NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for favourites_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."favourites_table";
CREATE TABLE "public"."favourites_table" (
  "favourites_id" int8 NOT NULL DEFAULT nextval('favourites_table_favourites_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "record_id" xml,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."favourites_table" OWNER TO "postgres";

-- ----------------------------
-- Table structure for front_menu_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."front_menu_table";
CREATE TABLE "public"."front_menu_table" (
  "front_menu_id" int8 NOT NULL DEFAULT nextval('front_menu_table_front_menu_id_seq'::regclass),
  "parent_id" int8 NOT NULL,
  "menu_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "path" varchar(255) COLLATE "pg_catalog"."default",
  "perms" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "component" varchar(255) COLLATE "pg_catalog"."default",
  "menu_type" int4 NOT NULL,
  "icon" varchar(20) COLLATE "pg_catalog"."default",
  "ordernum" int4,
  "statu" int4 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."front_menu_table" OWNER TO "postgres";

-- ----------------------------
-- Records of front_menu_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."front_menu_table" VALUES (113, 20, '删除书本', '', 'book:delete', '', 2, '', 3, 0, 'jiangwen', '2021-11-17 05:10:39.719938', 'jiangwen', '2021-11-17 05:11:35.207846');
INSERT INTO "public"."front_menu_table" VALUES (1, 0, '系统管理', NULL, 'sys:manage', NULL, 0, 'bars', 1, 0, NULL, '2020-09-09 00:00:00', NULL, '2021-09-08 00:00:00');
INSERT INTO "public"."front_menu_table" VALUES (4, 1, '菜单管理', 'menu-manage', 'sys:menu:list', 'MenuManageComponent', 1, 'appstore', 3, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (115, 106, '修改课文', '', 'lesson:update', '', 2, '', 5, 0, 'jiangwen', '2021-11-20 07:18:14.781529', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (8, 2, '修改用户', NULL, 'sys:user:update', NULL, 2, NULL, 2, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (10, 2, '分配角色', NULL, 'sys:user:role
', NULL, 2, NULL, 4, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (11, 2, '重置密码', NULL, 'sys:user:repass
', NULL, 2, NULL, 5, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (12, 3, '添加角色', NULL, 'sys:role:save', NULL, 2, NULL, 6, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (13, 3, '修改角色', NULL, 'sys:role:update', NULL, 2, NULL, 7, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (14, 3, '删除角色', NULL, 'sys:role:delete', NULL, 2, NULL, 8, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (15, 3, '分配限权', NULL, 'sys:role:perm', NULL, 2, NULL, 9, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (16, 4, '添加菜单', NULL, 'sys:menu:save', NULL, 2, NULL, 10, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (116, 106, '删除课文', '', 'lesson:delete', '', 2, '', 6, 0, 'jiangwen', '2021-11-20 07:18:54.980745', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (5, 0, '系统工具', NULL, 'sys:tools', NULL, 0, 'setting', 3, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (19, 0, '图书管理', NULL, 'book:manage', NULL, 0, 'book', 2, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (3, 1, '角色管理', 'roles-manage', 'sys:role:list', 'RoleManageComponent', 1, 'drag', 2, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (124, 106, '新增句子', NULL, 'sentence:sava', NULL, 2, NULL, 8, 0, 'jiangwen', '2021-11-24 09:31:05.237715', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (125, 106, '修改句子', NULL, 'sentence:update', NULL, 2, NULL, 9, 0, 'jiangwen', '2021-11-24 09:31:56.689187', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (126, 106, '删除句子', NULL, 'sentence:delete', NULL, 2, NULL, 10, 0, 'jiangwen', '2021-11-24 09:32:54.241297', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (9, 2, '删除用户', NULL, 'sys:user:delete
', NULL, 2, NULL, 3, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (148, 129, '修改文法', NULL, 'grammar:update', NULL, 2, NULL, 9, 0, 'jiangwen', '2021-11-24 16:54:37.342171', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (120, 118, '添加Code', NULL, 'code:save', NULL, 2, NULL, 11, 0, 'jiangwen', '2021-11-24 03:58:23.552957', 'jiangwen', '2021-11-24 09:34:31.056763');
INSERT INTO "public"."front_menu_table" VALUES (121, 118, '修改Code', NULL, 'code:update', NULL, 2, NULL, 12, 0, 'jiangwen', '2021-11-24 03:59:34.375301', 'jiangwen', '2021-11-24 09:34:57.771956');
INSERT INTO "public"."front_menu_table" VALUES (122, 118, '删除Code', NULL, 'code:delete', NULL, 2, NULL, 13, 0, 'jiangwen', '2021-11-24 04:00:15.593857', 'jiangwen', '2021-11-24 09:35:18.258159');
INSERT INTO "public"."front_menu_table" VALUES (17, 4, '修改菜单', NULL, 'sys:menu:update', NULL, 2, NULL, 11, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (18, 4, '删除菜单', NULL, 'sys:menu:delete', NULL, 2, NULL, 12, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (20, 19, '书本一览', 'booklist', 'book:list', 'BookManageComponent', 1, 'windows', 2, 0, NULL, NULL, 'jiangwen', '2021-11-24 10:02:48.887421');
INSERT INTO "public"."front_menu_table" VALUES (127, 19, '单词管理', 'word', 'word:list', 'WordManageComponent', 1, 'bold', 4, 0, 'jiangwen', '2021-11-24 09:53:14.33432', 'jiangwen', '2021-11-24 17:45:51.611916');
INSERT INTO "public"."front_menu_table" VALUES (111, 20, '添加书本', '', 'book:save', '', 2, '', 1, 0, 'jiangwen', '2021-11-17 05:05:14.593166', 'jiangwen', '2021-11-17 05:08:13.161302');
INSERT INTO "public"."front_menu_table" VALUES (112, 20, '更新书本', '', 'book:update', '', 2, '', 2, 0, 'jiangwen', '2021-11-17 05:09:06.0611', 'jiangwen', '2021-11-17 05:09:29.971774');
INSERT INTO "public"."front_menu_table" VALUES (106, 19, '课文一览', 'lesson', 'lesson:list', 'LessonManageComponent', 1, 'file-done', 3, 0, 'jiangwen', '2021-11-17 04:37:22.893926', 'jiangwen', '2021-11-24 10:03:06.065252');
INSERT INTO "public"."front_menu_table" VALUES (149, 129, '删除文法', NULL, 'grammar:delete', NULL, 2, NULL, 10, 0, 'jiangwen', '2021-11-24 16:55:13.202059', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (154, 106, '句子详情', 'lesson/sentence/word', 'sentence:detail', 'SentenceDetailComponent', 2, NULL, 8, 0, 'jiangwen', '2021-11-25 20:12:12.71078', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (6, 5, '打印图书', 'dicts', 'sys:dict:list', 'DictsUploadComponent', 1, 'container', 1, 0, NULL, NULL, 'jiangwen', '2021-11-24 16:55:49.753261');
INSERT INTO "public"."front_menu_table" VALUES (2, 1, '用户管理', 'users-manage', 'sys:user:list', 'UserManageComponent', 1, 'team', 1, 0, NULL, '2020-02-02 00:00:00', 'jiangwen', '2021-11-24 10:05:24.048648');
INSERT INTO "public"."front_menu_table" VALUES (119, 2, '添加用户', NULL, 'sys:user:save', NULL, 2, NULL, 1, 0, 'jiangwen', '2021-11-24 02:45:16.757981', 'jiangwen', '2021-11-24 02:46:46.43058');
INSERT INTO "public"."front_menu_table" VALUES (129, 19, '文法管理', 'grammar', 'grammar:list', 'GrammarManageComponent', 1, 'api', 6, 0, 'jiangwen', '2021-11-24 09:58:59.197548', 'jiangwen', '2021-11-28 09:43:52.921388');
INSERT INTO "public"."front_menu_table" VALUES (145, 127, '删除单词', NULL, 'word:delete', NULL, 2, NULL, 11, 0, 'jiangwen', '2021-11-24 16:50:32.138441', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (161, 127, '添加单词', NULL, 'word:add', NULL, 2, NULL, 8, 0, 'jiangwen', '2021-11-26 22:30:27.18031', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (139, 127, '更新单词', NULL, 'word:update', NULL, 2, NULL, 9, 0, 'jiangwen', '2021-11-24 11:13:24.612517', 'jiangwen', '2021-11-24 16:51:29.809532');
INSERT INTO "public"."front_menu_table" VALUES (146, 128, '修改短语', NULL, 'phrase:update', NULL, 2, NULL, 2, 0, 'jiangwen', '2021-11-24 16:52:30.427361', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (147, 128, '删除短语', NULL, 'phrase:delete', NULL, 2, NULL, 3, 0, 'jiangwen', '2021-11-24 16:53:33.711117', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (141, 19, '收藏记录', 'consumer', 'consumer:list', 'ConsumerManageComponent', 1, 'user', 1, 0, 'jiangwen', '2021-11-24 16:43:03.184654', 'jiangwen', '2021-11-29 19:42:15.93184');
INSERT INTO "public"."front_menu_table" VALUES (118, 19, 'Code', 'code', 'code:list', 'CodeManageComponent', 1, 'code', 7, 0, 'jiangwen', '2021-11-24 02:23:10.205665', 'jiangwen', '2021-11-24 17:46:47.018741');
INSERT INTO "public"."front_menu_table" VALUES (123, 106, '句子一览', 'lesson/sentence', 'sentence:list', 'SentenceManageComponent', 2, NULL, 7, 0, 'jiangwen', '2021-11-24 09:29:35.528731', 'jiangwen', '2021-11-24 17:59:28.925762');
INSERT INTO "public"."front_menu_table" VALUES (153, 106, '获取Code', NULL, 'sentence:codelist', NULL, 2, NULL, 24, 0, 'jiangwen', '2021-11-25 18:47:36.542634', 'jiangwen', '2021-11-25 20:24:58.816683');
INSERT INTO "public"."front_menu_table" VALUES (114, 106, '添加课文', '', 'lesson:save', '', 2, '', 4, 0, 'jiangwen', '2021-11-20 07:16:32.935788', 'jiangwen', '2021-11-25 20:25:22.103043');
INSERT INTO "public"."front_menu_table" VALUES (162, 128, '添加短语', NULL, 'phrase:add', NULL, 2, NULL, 1, 0, 'jiangwen', '2021-11-26 22:30:56.211074', 'jiangwen', '2021-11-26 22:31:29.587911');
INSERT INTO "public"."front_menu_table" VALUES (163, 129, '添加文法', NULL, 'grammar:add', NULL, 2, NULL, 8, 0, 'jiangwen', '2021-11-26 22:32:10.551015', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (128, 19, '短语管理', 'phrase', 'phrase:list', 'PhraseManageComponent', 1, 'edit', 5, 0, 'jiangwen', '2021-11-24 09:56:07.128292', 'jiangwen', '2021-11-28 09:41:45.493121');
INSERT INTO "public"."front_menu_table" VALUES (143, 141, '使用信息', 'consumer/history', 'history:list', 'HistoryManageComponent', 2, NULL, 1, 0, 'jiangwen', '2021-11-24 16:45:58.730703', 'jiangwen', '2021-11-29 15:53:51.253729');
INSERT INTO "public"."front_menu_table" VALUES (164, 141, '删除记录', NULL, 'history:delete', NULL, 2, NULL, 2, 0, 'jiangwen', '2021-11-29 17:46:22.166945', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for grammer_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."grammer_table";
CREATE TABLE "public"."grammer_table" (
  "grammer_id" int8 NOT NULL DEFAULT nextval('grammer_table_grammer_id_seq'::regclass),
  "grammer_title" text COLLATE "pg_catalog"."default" NOT NULL,
  "grammer" text COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."grammer_table" OWNER TO "postgres";

-- ----------------------------
-- Records of grammer_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."grammer_table" VALUES (1, '...は...です', '什么是什么', NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for lesson_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."lesson_table";
CREATE TABLE "public"."lesson_table" (
  "lesson_id" int8 NOT NULL DEFAULT nextval('lesson_table_lesson_id_seq'::regclass),
  "book_id" int8 NOT NULL,
  "lesson_name_translate" varchar(40) COLLATE "pg_catalog"."default",
  "lesson_name_orignal" varchar(40) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6),
  "lesson_number" int8 NOT NULL
)
;
ALTER TABLE "public"."lesson_table" OWNER TO "postgres";

-- ----------------------------
-- Records of lesson_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."lesson_table" VALUES (1, 1, '第一课：天气好', '第一課:天気が良く', '天气好一起去散步吧', NULL, NULL, NULL, NULL, 1);
INSERT INTO "public"."lesson_table" VALUES (2, 1, '第二课：天气好/二', '第二課:天気が良く/二', '天气好一起去散步吧/二', NULL, NULL, NULL, NULL, 2);
INSERT INTO "public"."lesson_table" VALUES (3, 1, '第三课：天气好/三', '第三課:天気が良く/三', '天气好一起去散步吧/三', NULL, NULL, NULL, NULL, 3);
INSERT INTO "public"."lesson_table" VALUES (4, 1, '第四课：天气好/四', '第四課:天気が良く/四', '天气好一起去散步吧/四', NULL, NULL, NULL, NULL, 4);
INSERT INTO "public"."lesson_table" VALUES (5, 1, '第五课：天气好/五', '第五課:天気が良く/五', '天气好一起去散步吧/五', NULL, NULL, NULL, NULL, 5);
INSERT INTO "public"."lesson_table" VALUES (7, 2, '时代的', '王薇薇', '外企', NULL, NULL, NULL, NULL, 2);
INSERT INTO "public"."lesson_table" VALUES (11, 3, '十八大精神', '十八大精神', '十八大精神', 'jiangwen', '2021-11-20 09:50:00.945237', 'jiangwen', '2021-11-22 02:33:26.342526', 2);
INSERT INTO "public"."lesson_table" VALUES (13, 3, '二十大精神', '二十大精神', '二十大精神nih', 'jiangwen', '2021-11-20 12:38:54.757546', 'jiangwen', '2021-11-23 04:48:15.470529', 4);
COMMIT;

-- ----------------------------
-- Table structure for phrase_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."phrase_table";
CREATE TABLE "public"."phrase_table" (
  "phrase_id" int8 NOT NULL DEFAULT nextval('phrase_table_phrase_id_seq'::regclass),
  "phrase_type" varchar(4) COLLATE "pg_catalog"."default",
  "phrase_name_translate" text COLLATE "pg_catalog"."default",
  "phrase_name_orignal" text COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."phrase_table" OWNER TO "postgres";

-- ----------------------------
-- Records of phrase_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."phrase_table" VALUES (1, '0001', '去', 'go to ', NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for role_menu_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."role_menu_table";
CREATE TABLE "public"."role_menu_table" (
  "role_menu_table" int8 NOT NULL DEFAULT nextval('role_menu_table_role_menu_table_seq'::regclass),
  "role_id" int8 NOT NULL,
  "front_menu_id" int8 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."role_menu_table" OWNER TO "postgres";

-- ----------------------------
-- Records of role_menu_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."role_menu_table" VALUES (2069, 3, 19, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2070, 3, 20, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2071, 3, 111, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2072, 3, 112, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2073, 3, 113, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2074, 3, 106, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2075, 3, 114, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2076, 3, 115, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2077, 3, 116, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2078, 3, 123, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2079, 3, 154, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2080, 3, 124, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2081, 3, 125, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2082, 3, 126, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2083, 3, 153, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2084, 3, 127, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2085, 3, 161, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2017, 6, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2018, 6, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2019, 6, 119, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2020, 6, 8, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2021, 6, 9, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2022, 6, 10, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2023, 6, 11, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2024, 6, 3, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2025, 6, 12, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2026, 6, 13, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2027, 6, 14, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2028, 6, 15, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2029, 6, 4, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2030, 6, 16, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2031, 6, 17, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2032, 6, 18, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2033, 6, 19, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2034, 6, 141, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2035, 6, 143, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2036, 6, 164, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2037, 6, 20, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2038, 6, 111, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2039, 6, 112, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2040, 6, 113, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2041, 6, 106, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2042, 6, 114, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2043, 6, 115, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2044, 6, 116, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2045, 6, 123, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2046, 6, 154, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2047, 6, 124, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2048, 6, 125, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2049, 6, 126, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2050, 6, 153, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2051, 6, 127, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2052, 6, 161, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2053, 6, 139, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2054, 6, 145, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2055, 6, 128, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2056, 6, 162, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2057, 6, 146, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2058, 6, 147, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2059, 6, 129, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2060, 6, 163, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2061, 6, 148, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2062, 6, 149, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2063, 6, 118, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2064, 6, 120, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2065, 6, 121, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2066, 6, 122, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2067, 6, 5, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2068, 6, 6, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2086, 3, 139, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2087, 3, 145, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2088, 3, 128, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2089, 3, 162, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2090, 3, 146, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2091, 3, 147, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2092, 3, 129, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2093, 3, 163, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2094, 3, 148, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2095, 3, 149, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2096, 3, 5, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2097, 3, 6, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2098, 9, 19, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2099, 9, 141, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2100, 9, 143, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2101, 9, 164, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2102, 9, 20, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2103, 9, 111, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2104, 9, 112, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2105, 9, 113, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2106, 9, 106, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2107, 9, 114, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2108, 9, 115, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2109, 9, 116, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2110, 9, 123, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2111, 9, 154, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2112, 9, 124, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2113, 9, 125, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2114, 9, 126, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2115, 9, 153, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2116, 9, 127, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2117, 9, 161, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2118, 9, 139, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2119, 9, 145, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2120, 9, 128, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2121, 9, 162, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2122, 9, 146, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2123, 9, 147, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2124, 9, 129, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2125, 9, 163, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2126, 9, 148, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2127, 9, 149, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2128, 9, 118, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2129, 9, 120, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2130, 9, 121, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2131, 9, 122, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2132, 9, 5, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (2133, 9, 6, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for role_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."role_table";
CREATE TABLE "public"."role_table" (
  "role_id" int8 NOT NULL DEFAULT nextval('role_table_role_id_seq'::regclass),
  "role_name" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "remark" varchar(255) COLLATE "pg_catalog"."default",
  "symbol" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "statu" int4 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."role_table" OWNER TO "postgres";

-- ----------------------------
-- Records of role_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."role_table" VALUES (6, '超级管理员', '系统默认最高权限，不可以编辑和任意修改', 'admin', 0, NULL, '2020-09-09 00:00:00', NULL, '2021-11-22 02:43:47.342536');
INSERT INTO "public"."role_table" VALUES (3, '普通用户', '只有基本查看功能', 'normal', 0, NULL, '2020-09-09 00:00:00', NULL, '2021-11-23 04:29:13.061645');
INSERT INTO "public"."role_table" VALUES (9, '一般管理员', '能对普通用户进行管理，对图书进行增删查改', 'general', 0, NULL, '2020-09-09 00:00:00', NULL, '2021-11-23 04:29:20.69694');
COMMIT;

-- ----------------------------
-- Table structure for sentence_grammer_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_grammer_table";
CREATE TABLE "public"."sentence_grammer_table" (
  "sentence_grammer_id" int8 NOT NULL DEFAULT nextval('sentence_grammer_table_sentence_grammer_id_seq'::regclass),
  "grammer_id" int8 NOT NULL,
  "sentence_seq" int8 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."sentence_grammer_table" OWNER TO "postgres";

-- ----------------------------
-- Records of sentence_grammer_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."sentence_grammer_table" VALUES (1, 1, 10, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sentence_phrase_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_phrase_table";
CREATE TABLE "public"."sentence_phrase_table" (
  "sentence_phrase_id" int8 NOT NULL DEFAULT nextval('sentence_phrase_table_sentence_phrase_id_seq'::regclass),
  "phrase_id" int8 NOT NULL,
  "sentence_seq" int8 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."sentence_phrase_table" OWNER TO "postgres";

-- ----------------------------
-- Records of sentence_phrase_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."sentence_phrase_table" VALUES (1, 1, 10, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sentence_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_table";
CREATE TABLE "public"."sentence_table" (
  "sentence_seq" int8 NOT NULL DEFAULT nextval('sentence_table_sentence_seq_seq'::regclass),
  "lesson_id" int8 NOT NULL,
  "line_no" int8,
  "sentence_type" varchar(4) COLLATE "pg_catalog"."default" NOT NULL,
  "sentence_name_translate" text COLLATE "pg_catalog"."default",
  "sentence_name_orignal" text COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."sentence_table" OWNER TO "postgres";

-- ----------------------------
-- Records of sentence_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."sentence_table" VALUES (1, 1, 1, '0001', NULL, '课程id为1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (2, 1, 2, '0001', NULL, '课程id为1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (3, 1, 3, '0001', NULL, '课程id为1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (4, 7, 1, '0002', NULL, '课程id为7', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (5, 7, 2, '0002', NULL, '课程id为7', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (6, 7, 1, '0001', NULL, '课程id为7', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (7, 7, 1, '0003', NULL, '课程id为7', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (8, 7, 2, '0003', NULL, '课程id为7', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (9, 7, 3, '0003', NULL, '课程id为7', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (11, 11, 2, '0002', NULL, '课程id为11', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (10, 11, 1, '0001', NULL, '课程id为11句子id为10测试', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (19, 13, 1, '0001', '测试', '测试', NULL, 'jiangwen', '2021-11-28 23:58:00.299446', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sentence_word_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_word_table";
CREATE TABLE "public"."sentence_word_table" (
  "sentence_word_id" int8 NOT NULL DEFAULT nextval('sentence_word_table_sentence_word_id_seq'::regclass),
  "word_id" int8 NOT NULL,
  "sentence_seq" int8 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."sentence_word_table" OWNER TO "postgres";

-- ----------------------------
-- Records of sentence_word_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."sentence_word_table" VALUES (1, 1, 10, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_word_table" VALUES (2, 2, 10, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_word_table" VALUES (3, 3, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_word_table" VALUES (25, 32, 19, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_info";
CREATE TABLE "public"."user_info" (
  "user_id" int8 NOT NULL DEFAULT nextval('user_info_user_id_seq'::regclass),
  "username" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "authority" varchar(255) COLLATE "pg_catalog"."default",
  "password_history" varchar(255) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "picture" text COLLATE "pg_catalog"."default",
  "email" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "mobile" varchar(20) COLLATE "pg_catalog"."default",
  "statu" int4 NOT NULL,
  "last_login" timestamp(6),
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."user_info" OWNER TO "postgres";

-- ----------------------------
-- Records of user_info
-- ----------------------------
BEGIN;
INSERT INTO "public"."user_info" VALUES (1998, 'jiangwen2', '$2a$10$ZfUWV95E1YeCZHFalFXiCuwzZbPzyTE8S.1I74M51crEUvCmSOrue', 'admin', NULL, NULL, 'user', '11@ll.com', NULL, 0, NULL, NULL, NULL, NULL, '2021-11-22 02:47:07.458299');
INSERT INTO "public"."user_info" VALUES (9999, 'mnm', '$2a$10$ZfUWV95E1YeCZHFalFXiCuwzZbPzyTE8S.1I74M51crEUvCmSOrue', 'general', NULL, NULL, 'user', '11@ll.com', NULL, 0, NULL, NULL, NULL, NULL, '2021-11-22 02:46:05.91589');
INSERT INTO "public"."user_info" VALUES (1996, 'jiangwen', '$2a$10$WqNk.lgpKjmT0K.foYSiOOB5UTIleJZcPvFRSAzAlsKwKk2sOVkwW', 'admin', 'old_password', 'description', 'user', 'jiangwen9@yahoo.com', '999999999', 0, '2011-09-09 00:00:00', 'jw', '2009-09-09 00:00:00', 'jw', '2021-11-22 02:46:10.833687');
INSERT INTO "public"."user_info" VALUES (1997, 'test', '$2a$10$ylFmtYmQWF.Ef0i17u/YgeY6Dq4I4uh80Y44wtw.XstM3sLA4eHfa', 'normal', 'old_password', 'description', 'user', 'jiangwen9@yahoo.com', '8888888888', 0, '2011-09-09 00:00:00', 'miho', '2009-09-09 00:00:00', 'miho', '2021-11-22 02:46:27.643277');
INSERT INTO "public"."user_info" VALUES (8888, 'showen', '$2a$10$ZfUWV95E1YeCZHFalFXiCuwzZbPzyTE8S.1I74M51crEUvCmSOrue', 'general', 'old_password', 'description', 'user', 'jiangwen9@yahoo.com', '8888888888', 0, '2011-09-09 00:00:00', 'miho', '2009-09-09 00:00:00', 'miho', '2021-11-22 02:46:37.619693');
COMMIT;

-- ----------------------------
-- Table structure for user_practice_history
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_practice_history";
CREATE TABLE "public"."user_practice_history" (
  "history_id" int8 NOT NULL DEFAULT nextval('user_practice_history_history_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "sentence_seq" int8 NOT NULL,
  "favourites_flg" bool NOT NULL,
  "mistakes_flg" bool NOT NULL,
  "mistake_count" int8,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."user_practice_history" OWNER TO "postgres";

-- ----------------------------
-- Records of user_practice_history
-- ----------------------------
BEGIN;
INSERT INTO "public"."user_practice_history" VALUES (1, 1997, 1, 't', 'f', 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_practice_history" VALUES (2, 1998, 5, 't', 't', 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_practice_history" VALUES (3, 1997, 6, 't', 't', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_practice_history" VALUES (6, 1998, 1, 't', 't', 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_practice_history" VALUES (9, 1998, 19, 't', 't', 9, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user_role_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_role_table";
CREATE TABLE "public"."user_role_table" (
  "user_role_id" int8 NOT NULL DEFAULT nextval('user_role_table_user_role_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "role_id" int8 NOT NULL,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."user_role_table" OWNER TO "postgres";

-- ----------------------------
-- Records of user_role_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."user_role_table" VALUES (4, 1996, 3, 'j', NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (7, 1996, 6, 'w', '2021-09-09 00:00:00', 'o', '2021-09-10 00:00:00');
INSERT INTO "public"."user_role_table" VALUES (13, 1997, 3, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (1, 1998, 3, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (2, 1998, 6, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (3, 1996, 9, '3', NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (5, 1998, 9, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (6, 8888, 3, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (10, 9999, 3, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (8, 8888, 9, NULL, NULL, NULL, NULL);
INSERT INTO "public"."user_role_table" VALUES (9, 9999, 9, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for word_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."word_table";
CREATE TABLE "public"."word_table" (
  "word_id" int8 NOT NULL DEFAULT nextval('word_table_word_id_seq'::regclass),
  "word_name_translate" text COLLATE "pg_catalog"."default",
  "word_name_orignal" text COLLATE "pg_catalog"."default" NOT NULL,
  "word_type" xml,
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."word_table" OWNER TO "postgres";

-- ----------------------------
-- Records of word_table
-- ----------------------------
BEGIN;
INSERT INTO "public"."word_table" VALUES (1, 'world', '世界', '0001', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."word_table" VALUES (2, 'hello', '你好', '0002', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."word_table" VALUES (3, 'other', '其他', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."word_table" VALUES (32, '测试', '测试', NULL, NULL, 'jiangwen', '2021-11-28 23:58:17.054985', NULL, NULL);
COMMIT;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."book_table_book_id_seq"
OWNED BY "public"."book_table"."book_id";
SELECT setval('"public"."book_table_book_id_seq"', 21, true);
ALTER SEQUENCE "public"."code_table_code_id_seq"
OWNED BY "public"."code_table"."code_id";
SELECT setval('"public"."code_table_code_id_seq"', 16, true);
ALTER SEQUENCE "public"."favourites_table_favourites_id_seq"
OWNED BY "public"."favourites_table"."favourites_id";
SELECT setval('"public"."favourites_table_favourites_id_seq"', 2, false);
SELECT setval('"public"."front_menu_table_front_menu_id_seq"', 165, true);
ALTER SEQUENCE "public"."grammer_table_grammer_id_seq"
OWNED BY "public"."grammer_table"."grammer_id";
SELECT setval('"public"."grammer_table_grammer_id_seq"', 21, true);
ALTER SEQUENCE "public"."lesson_table_lesson_id_seq"
OWNED BY "public"."lesson_table"."lesson_id";
SELECT setval('"public"."lesson_table_lesson_id_seq"', 47, true);
ALTER SEQUENCE "public"."phrase_table_phrase_id_seq"
OWNED BY "public"."phrase_table"."phrase_id";
SELECT setval('"public"."phrase_table_phrase_id_seq"', 17, true);
SELECT setval('"public"."role_menu_table_role_menu_table_seq"', 2134, true);
SELECT setval('"public"."role_table_role_id_seq"', 106, true);
SELECT setval('"public"."sentence_grammer_table_sentence_grammer_id_seq"', 21, true);
SELECT setval('"public"."sentence_phrase_table_sentence_phrase_id_seq"', 17, true);
ALTER SEQUENCE "public"."sentence_table_sentence_seq_seq"
OWNED BY "public"."sentence_table"."sentence_seq";
SELECT setval('"public"."sentence_table_sentence_seq_seq"', 20, true);
SELECT setval('"public"."sentence_word_table_sentence_word_id_seq"', 29, true);
ALTER SEQUENCE "public"."user_info_user_id_seq"
OWNED BY "public"."user_info"."user_id";
SELECT setval('"public"."user_info_user_id_seq"', 67, true);
ALTER SEQUENCE "public"."user_practice_history_history_id_seq"
OWNED BY "public"."user_practice_history"."history_id";
SELECT setval('"public"."user_practice_history_history_id_seq"', 2, false);
SELECT setval('"public"."user_role_table_user_role_id_seq"', 32, true);
ALTER SEQUENCE "public"."word_table_word_id_seq"
OWNED BY "public"."word_table"."word_id";
SELECT setval('"public"."word_table_word_id_seq"', 36, true);

-- ----------------------------
-- Uniques structure for table book_table
-- ----------------------------
ALTER TABLE "public"."book_table" ADD CONSTRAINT "book_table_book_name_orignal_key" UNIQUE ("book_name_orignal");
ALTER TABLE "public"."book_table" ADD CONSTRAINT "book_table_book_number_key" UNIQUE ("book_number");

-- ----------------------------
-- Primary Key structure for table book_table
-- ----------------------------
ALTER TABLE "public"."book_table" ADD CONSTRAINT "book_table_pkey" PRIMARY KEY ("book_id");

-- ----------------------------
-- Uniques structure for table code_table
-- ----------------------------
ALTER TABLE "public"."code_table" ADD CONSTRAINT "code_table_code_no_key" UNIQUE ("code_no");

-- ----------------------------
-- Primary Key structure for table code_table
-- ----------------------------
ALTER TABLE "public"."code_table" ADD CONSTRAINT "code_table_pkey" PRIMARY KEY ("code_id");

-- ----------------------------
-- Primary Key structure for table favourites_table
-- ----------------------------
ALTER TABLE "public"."favourites_table" ADD CONSTRAINT "favourites_table_pkey" PRIMARY KEY ("favourites_id");

-- ----------------------------
-- Uniques structure for table front_menu_table
-- ----------------------------
ALTER TABLE "public"."front_menu_table" ADD CONSTRAINT "front_menu_table_perms_key" UNIQUE ("perms");

-- ----------------------------
-- Primary Key structure for table front_menu_table
-- ----------------------------
ALTER TABLE "public"."front_menu_table" ADD CONSTRAINT "front_menu_table_pkey" PRIMARY KEY ("front_menu_id");

-- ----------------------------
-- Primary Key structure for table grammer_table
-- ----------------------------
ALTER TABLE "public"."grammer_table" ADD CONSTRAINT "grammer_table_pkey" PRIMARY KEY ("grammer_id");

-- ----------------------------
-- Primary Key structure for table lesson_table
-- ----------------------------
ALTER TABLE "public"."lesson_table" ADD CONSTRAINT "lesson_table_pkey" PRIMARY KEY ("lesson_id");

-- ----------------------------
-- Primary Key structure for table phrase_table
-- ----------------------------
ALTER TABLE "public"."phrase_table" ADD CONSTRAINT "phrase_table_pkey" PRIMARY KEY ("phrase_id");

-- ----------------------------
-- Primary Key structure for table role_menu_table
-- ----------------------------
ALTER TABLE "public"."role_menu_table" ADD CONSTRAINT "role_menu_table_pkey" PRIMARY KEY ("role_menu_table");

-- ----------------------------
-- Uniques structure for table role_table
-- ----------------------------
ALTER TABLE "public"."role_table" ADD CONSTRAINT "role_table_symbol_key" UNIQUE ("symbol");

-- ----------------------------
-- Primary Key structure for table role_table
-- ----------------------------
ALTER TABLE "public"."role_table" ADD CONSTRAINT "role_table_pkey" PRIMARY KEY ("role_id");

-- ----------------------------
-- Primary Key structure for table sentence_grammer_table
-- ----------------------------
ALTER TABLE "public"."sentence_grammer_table" ADD CONSTRAINT "sentence_grammer_table_pkey" PRIMARY KEY ("sentence_grammer_id");

-- ----------------------------
-- Primary Key structure for table sentence_phrase_table
-- ----------------------------
ALTER TABLE "public"."sentence_phrase_table" ADD CONSTRAINT "sentence_phrase_table_pkey" PRIMARY KEY ("sentence_phrase_id");

-- ----------------------------
-- Primary Key structure for table sentence_table
-- ----------------------------
ALTER TABLE "public"."sentence_table" ADD CONSTRAINT "sentence_table_pkey" PRIMARY KEY ("sentence_seq");

-- ----------------------------
-- Primary Key structure for table sentence_word_table
-- ----------------------------
ALTER TABLE "public"."sentence_word_table" ADD CONSTRAINT "sentence_word_table_pkey" PRIMARY KEY ("sentence_word_id");

-- ----------------------------
-- Uniques structure for table user_info
-- ----------------------------
ALTER TABLE "public"."user_info" ADD CONSTRAINT "用户名" UNIQUE ("username");

-- ----------------------------
-- Primary Key structure for table user_info
-- ----------------------------
ALTER TABLE "public"."user_info" ADD CONSTRAINT "user_info_pkey" PRIMARY KEY ("user_id");

-- ----------------------------
-- Uniques structure for table user_practice_history
-- ----------------------------
ALTER TABLE "public"."user_practice_history" ADD CONSTRAINT "history_information" UNIQUE ("user_id", "sentence_seq");

-- ----------------------------
-- Primary Key structure for table user_practice_history
-- ----------------------------
ALTER TABLE "public"."user_practice_history" ADD CONSTRAINT "user_practice_history_pkey" PRIMARY KEY ("history_id");

-- ----------------------------
-- Primary Key structure for table user_role_table
-- ----------------------------
ALTER TABLE "public"."user_role_table" ADD CONSTRAINT "user_role_table_pkey" PRIMARY KEY ("user_role_id");

-- ----------------------------
-- Primary Key structure for table word_table
-- ----------------------------
ALTER TABLE "public"."word_table" ADD CONSTRAINT "word_table_pkey" PRIMARY KEY ("word_id");

-- ----------------------------
-- Foreign Keys structure for table favourites_table
-- ----------------------------
ALTER TABLE "public"."favourites_table" ADD CONSTRAINT "favourites_table_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user_info" ("user_id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table lesson_table
-- ----------------------------
ALTER TABLE "public"."lesson_table" ADD CONSTRAINT "lesson_table_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "public"."book_table" ("book_id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table role_menu_table
-- ----------------------------
ALTER TABLE "public"."role_menu_table" ADD CONSTRAINT "role_menu_table_front_menu_id_fkey" FOREIGN KEY ("front_menu_id") REFERENCES "public"."front_menu_table" ("front_menu_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."role_menu_table" ADD CONSTRAINT "role_menu_table_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."role_table" ("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table sentence_grammer_table
-- ----------------------------
ALTER TABLE "public"."sentence_grammer_table" ADD CONSTRAINT "sentence_grammer_table_grammer_id_fkey" FOREIGN KEY ("grammer_id") REFERENCES "public"."grammer_table" ("grammer_id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."sentence_grammer_table" ADD CONSTRAINT "sentence_grammer_table_sentence_seq_fkey" FOREIGN KEY ("sentence_seq") REFERENCES "public"."sentence_table" ("sentence_seq") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table sentence_phrase_table
-- ----------------------------
ALTER TABLE "public"."sentence_phrase_table" ADD CONSTRAINT "sentence_phrase_table_phrase_id_fkey" FOREIGN KEY ("phrase_id") REFERENCES "public"."phrase_table" ("phrase_id") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."sentence_phrase_table" ADD CONSTRAINT "sentence_phrase_table_sentence_seq_fkey" FOREIGN KEY ("sentence_seq") REFERENCES "public"."sentence_table" ("sentence_seq") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table sentence_table
-- ----------------------------
ALTER TABLE "public"."sentence_table" ADD CONSTRAINT "sentence_table_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "public"."lesson_table" ("lesson_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table sentence_word_table
-- ----------------------------
ALTER TABLE "public"."sentence_word_table" ADD CONSTRAINT "sentence_word_table_sentence_seq_fkey" FOREIGN KEY ("sentence_seq") REFERENCES "public"."sentence_table" ("sentence_seq") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."sentence_word_table" ADD CONSTRAINT "sentence_word_table_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "public"."word_table" ("word_id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table user_practice_history
-- ----------------------------
ALTER TABLE "public"."user_practice_history" ADD CONSTRAINT "user_practice_history_sentence_seq_fkey" FOREIGN KEY ("sentence_seq") REFERENCES "public"."sentence_table" ("sentence_seq") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "public"."user_practice_history" ADD CONSTRAINT "user_practice_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user_info" ("user_id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table user_role_table
-- ----------------------------
ALTER TABLE "public"."user_role_table" ADD CONSTRAINT "user_role_table_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."role_table" ("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."user_role_table" ADD CONSTRAINT "user_role_table_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user_info" ("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
