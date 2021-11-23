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

 Date: 23/11/2021 15:50:40
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
-- Sequence structure for sentence_table_line_no_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."sentence_table_line_no_seq";
CREATE SEQUENCE "public"."sentence_table_line_no_seq" 
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
INSERT INTO "public"."book_table" VALUES (10, 'geliefuyouji', '格列佛游记', 'geliefuyoujiooooo', 'jiangwen', '2021-11-19 10:01:41.688576', NULL, NULL, 9);
INSERT INTO "public"."book_table" VALUES (15, 'wozaiyanan', '我在延安', 'wozaiyanan', 'jiangwen', '2021-11-20 05:25:40.551146', NULL, NULL, 15);
INSERT INTO "public"."book_table" VALUES (16, '庄子', '庄子', '庄子', 'jiangwen', '2021-11-21 09:58:36.082588', 'jiangwen', '2021-11-21 09:58:43.911062', 18);
INSERT INTO "public"."book_table" VALUES (3, '我的日本语123', 'わたしの日本語', '我的日本语', NULL, NULL, 'jiangwen', '2021-11-21 10:13:19.144831', 1);
INSERT INTO "public"."book_table" VALUES (12, 'daodejing', '道德经', '老子', 'jiangwen', '2021-11-19 10:02:29.613741', 'test', '2021-11-22 02:50:37.785053', 16);
INSERT INTO "public"."book_table" VALUES (11, 'zhijian', '之江新语', 'zhijiangxinyu', 'jiangwen', '2021-11-19 10:02:09.383253', 'jiangwen', '2021-11-22 05:09:35.368486', 10);
INSERT INTO "public"."book_table" VALUES (19, '走进新时代', '改革开放', 'v成功', 'jiangwen', '2021-11-22 05:11:04.923828', NULL, NULL, 65);
INSERT INTO "public"."book_table" VALUES (20, '脱贫攻坚', '脱贫攻坚', '脱贫攻坚是场持久战', 'jiangwen', '2021-11-22 06:16:31.590688', NULL, NULL, 66);
COMMIT;

-- ----------------------------
-- Table structure for code_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."code_table";
CREATE TABLE "public"."code_table" (
  "code_id" int8 NOT NULL DEFAULT nextval('code_table_code_id_seq'::regclass),
  "code_no" varchar(4) COLLATE "pg_catalog"."default",
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
INSERT INTO "public"."front_menu_table" VALUES (106, 19, '课文一览', 'lesson', 'lesson:list', 'LessonManageComponent', 1, 'file-done', 2, 0, 'jiangwen', '2021-11-17 04:37:22.893926', 'jiangwen', '2021-11-19 08:43:10.215374');
INSERT INTO "public"."front_menu_table" VALUES (114, 106, '课文添加', '', 'lesson:save', '', 2, '', 4, 0, 'jiangwen', '2021-11-20 07:16:32.935788', NULL, NULL);
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
INSERT INTO "public"."front_menu_table" VALUES (2, 1, '用户管理', 'users-manage', 'sys:user:list', 'UserManageComponent', 1, 'user', 1, 0, NULL, '2020-02-02 00:00:00', NULL, '2021-01-01 00:00:00');
INSERT INTO "public"."front_menu_table" VALUES (3, 1, '角色管理', 'roles-manage', 'sys:role:list', 'RoleManageComponent', 1, 'drag', 2, 0, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (7, 2, '添加用户', NULL, 'sys:user:save', NULL, 2, NULL, 1, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (9, 2, '删除用户', NULL, 'sys:user:delete
', NULL, 2, NULL, 3, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (17, 4, '修改菜单', NULL, 'sys:menu:update', NULL, 2, NULL, 11, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (18, 4, '删除菜单', NULL, 'sys:menu:delete', NULL, 2, NULL, 12, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (20, 19, '书本一览', 'booklist', 'book:list', 'BookManageComponent', 1, 'windows', 1, 0, NULL, NULL, 'jiangwen', '2021-11-16 01:24:02.561694');
INSERT INTO "public"."front_menu_table" VALUES (109, 19, '收藏夹', 'favorites', 'favorites', 'FavoritesComponent', 1, 'star', 4, 0, 'jiangwen', '2021-11-17 04:50:02.342559', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (110, 19, '错题本', 'mistake', 'mistake:list', 'MistakeComponent', 1, 'bug', 5, 0, 'jiangwen', '2021-11-17 04:58:33.827284', NULL, NULL);
INSERT INTO "public"."front_menu_table" VALUES (6, 5, '文件上传', 'dicts', 'sys:dict:list', 'DictsUploadComponent', 1, 'container', 1, 0, NULL, NULL, 'jiangwen', '2021-11-22 02:45:38.544423');
INSERT INTO "public"."front_menu_table" VALUES (111, 20, '添加书本', '', 'book:save', '', 2, '', 1, 0, 'jiangwen', '2021-11-17 05:05:14.593166', 'jiangwen', '2021-11-17 05:08:13.161302');
INSERT INTO "public"."front_menu_table" VALUES (112, 20, '更新书本', '', 'book:update', '', 2, '', 2, 0, 'jiangwen', '2021-11-17 05:09:06.0611', 'jiangwen', '2021-11-17 05:09:29.971774');
COMMIT;

-- ----------------------------
-- Table structure for grammer_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."grammer_table";
CREATE TABLE "public"."grammer_table" (
  "grammer_id" int8 NOT NULL DEFAULT nextval('grammer_table_grammer_id_seq'::regclass),
  "grammer_title" text COLLATE "pg_catalog"."default",
  "grammer" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."grammer_table" OWNER TO "postgres";

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
  "phrase_name_orignal" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."phrase_table" OWNER TO "postgres";

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
INSERT INTO "public"."role_menu_table" VALUES (508, 9, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (509, 9, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (510, 9, 7, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (511, 9, 8, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (512, 9, 9, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (513, 9, 10, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (514, 9, 11, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (515, 9, 19, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (516, 9, 20, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (517, 9, 111, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (518, 9, 112, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (519, 9, 113, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (520, 9, 106, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (521, 9, 114, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (522, 9, 115, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (523, 9, 116, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (524, 9, 109, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (525, 9, 110, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (526, 9, 5, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (527, 9, 6, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (400, 3, 19, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (401, 3, 20, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (402, 3, 111, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (403, 3, 112, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (404, 3, 113, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (405, 3, 106, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (406, 3, 109, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (407, 3, 110, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (408, 3, 5, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (409, 3, 6, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (459, 6, 1, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (460, 6, 2, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (461, 6, 7, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (462, 6, 8, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (463, 6, 9, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (464, 6, 10, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (465, 6, 11, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (466, 6, 3, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (467, 6, 12, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (468, 6, 13, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (469, 6, 14, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (470, 6, 15, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (471, 6, 4, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (472, 6, 16, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (473, 6, 17, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (474, 6, 18, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (475, 6, 19, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (476, 6, 20, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (477, 6, 111, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (478, 6, 112, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (479, 6, 113, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (480, 6, 106, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (481, 6, 114, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (482, 6, 115, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (483, 6, 116, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (484, 6, 109, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (485, 6, 110, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (486, 6, 5, NULL, NULL, NULL, NULL);
INSERT INTO "public"."role_menu_table" VALUES (487, 6, 6, NULL, NULL, NULL, NULL);
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
  "sentence_grammer_id" int8 NOT NULL,
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
-- Table structure for sentence_phrase_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_phrase_table";
CREATE TABLE "public"."sentence_phrase_table" (
  "sentence_phrase_id" int8 NOT NULL,
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
-- Table structure for sentence_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_table";
CREATE TABLE "public"."sentence_table" (
  "sentence_seq" int8 NOT NULL DEFAULT nextval('sentence_table_sentence_seq_seq'::regclass),
  "lesson_id" int8 NOT NULL,
  "line_no" int8 NOT NULL DEFAULT nextval('sentence_table_line_no_seq'::regclass),
  "sentence_type" varchar(4) COLLATE "pg_catalog"."default",
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
INSERT INTO "public"."sentence_table" VALUES (10, 11, 1, '0001', NULL, '课程id为11', NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."sentence_table" VALUES (11, 11, 2, '0002', NULL, '课程id为11', NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sentence_word_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."sentence_word_table";
CREATE TABLE "public"."sentence_word_table" (
  "sentence_word_id" int8 NOT NULL,
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
  "sentence_seq" int8,
  "favourites_flg" bool,
  "mistakes_flg" bool,
  "mistake_count" int8,
  "creater" varchar(20) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "updater" varchar(20) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6)
)
;
ALTER TABLE "public"."user_practice_history" OWNER TO "postgres";

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
  "word_name_orignal" text COLLATE "pg_catalog"."default",
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
INSERT INTO "public"."word_table" VALUES (1, 'asc', 'cscs', '0001', NULL, NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."book_table_book_id_seq"
OWNED BY "public"."book_table"."book_id";
SELECT setval('"public"."book_table_book_id_seq"', 21, true);
ALTER SEQUENCE "public"."code_table_code_id_seq"
OWNED BY "public"."code_table"."code_id";
SELECT setval('"public"."code_table_code_id_seq"', 2, false);
ALTER SEQUENCE "public"."favourites_table_favourites_id_seq"
OWNED BY "public"."favourites_table"."favourites_id";
SELECT setval('"public"."favourites_table_favourites_id_seq"', 2, false);
SELECT setval('"public"."front_menu_table_front_menu_id_seq"', 118, true);
ALTER SEQUENCE "public"."grammer_table_grammer_id_seq"
OWNED BY "public"."grammer_table"."grammer_id";
SELECT setval('"public"."grammer_table_grammer_id_seq"', 2, false);
ALTER SEQUENCE "public"."lesson_table_lesson_id_seq"
OWNED BY "public"."lesson_table"."lesson_id";
SELECT setval('"public"."lesson_table_lesson_id_seq"', 47, true);
ALTER SEQUENCE "public"."phrase_table_phrase_id_seq"
OWNED BY "public"."phrase_table"."phrase_id";
SELECT setval('"public"."phrase_table_phrase_id_seq"', 2, false);
SELECT setval('"public"."role_menu_table_role_menu_table_seq"', 534, true);
SELECT setval('"public"."role_table_role_id_seq"', 106, true);
ALTER SEQUENCE "public"."sentence_table_line_no_seq"
OWNED BY "public"."sentence_table"."line_no";
SELECT setval('"public"."sentence_table_line_no_seq"', 2, false);
ALTER SEQUENCE "public"."sentence_table_sentence_seq_seq"
OWNED BY "public"."sentence_table"."sentence_seq";
SELECT setval('"public"."sentence_table_sentence_seq_seq"', 2, false);
ALTER SEQUENCE "public"."user_info_user_id_seq"
OWNED BY "public"."user_info"."user_id";
SELECT setval('"public"."user_info_user_id_seq"', 64, true);
ALTER SEQUENCE "public"."user_practice_history_history_id_seq"
OWNED BY "public"."user_practice_history"."history_id";
SELECT setval('"public"."user_practice_history_history_id_seq"', 2, false);
SELECT setval('"public"."user_role_table_user_role_id_seq"', 31, true);
ALTER SEQUENCE "public"."word_table_word_id_seq"
OWNED BY "public"."word_table"."word_id";
SELECT setval('"public"."word_table_word_id_seq"', 2, false);

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
-- Primary Key structure for table code_table
-- ----------------------------
ALTER TABLE "public"."code_table" ADD CONSTRAINT "code_table_pkey" PRIMARY KEY ("code_id");

-- ----------------------------
-- Primary Key structure for table favourites_table
-- ----------------------------
ALTER TABLE "public"."favourites_table" ADD CONSTRAINT "favourites_table_pkey" PRIMARY KEY ("favourites_id");

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
