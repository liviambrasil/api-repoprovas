--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: course; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.course (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: course_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.course_id_seq OWNED BY public.course.id;


--
-- Name: professor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professor (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: professor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.professor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.professor_id_seq OWNED BY public.professor.id;


--
-- Name: semester; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.semester (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: semester_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.semester_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: semester_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.semester_id_seq OWNED BY public.semester.id;


--
-- Name: subject; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subject (
    id integer NOT NULL,
    name text NOT NULL,
    "semesterId" integer NOT NULL
);


--
-- Name: subject_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subject_id_seq OWNED BY public.subject.id;


--
-- Name: subject_professor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subject_professor (
    id integer NOT NULL,
    "subjectId" integer NOT NULL,
    "professorId" integer NOT NULL,
    "courseId" integer NOT NULL
);


--
-- Name: subject_professor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subject_professor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subject_professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subject_professor_id_seq OWNED BY public.subject_professor.id;


--
-- Name: test; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test (
    id integer NOT NULL,
    name text NOT NULL,
    link text NOT NULL,
    "categoryId" integer NOT NULL,
    "subjectId" integer NOT NULL,
    "professorId" integer NOT NULL
);


--
-- Name: test_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.test_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: test_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.test_id_seq OWNED BY public.test.id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: course id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.course ALTER COLUMN id SET DEFAULT nextval('public.course_id_seq'::regclass);


--
-- Name: professor id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professor ALTER COLUMN id SET DEFAULT nextval('public.professor_id_seq'::regclass);


--
-- Name: semester id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semester ALTER COLUMN id SET DEFAULT nextval('public.semester_id_seq'::regclass);


--
-- Name: subject id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject ALTER COLUMN id SET DEFAULT nextval('public.subject_id_seq'::regclass);


--
-- Name: subject_professor id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject_professor ALTER COLUMN id SET DEFAULT nextval('public.subject_professor_id_seq'::regclass);


--
-- Name: test id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test ALTER COLUMN id SET DEFAULT nextval('public.test_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.category VALUES (1, 'P1');
INSERT INTO public.category VALUES (2, 'P2');
INSERT INTO public.category VALUES (3, 'P3');
INSERT INTO public.category VALUES (4, '2ch');
INSERT INTO public.category VALUES (5, 'Outras');


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.course VALUES (1, 'Psicologia');
INSERT INTO public.course VALUES (2, 'Ciências da computação');


--
-- Data for Name: professor; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professor VALUES (1, 'Ana Cláudia Monteiro');
INSERT INTO public.professor VALUES (2, 'Márcia Moraes');
INSERT INTO public.professor VALUES (3, 'Emílio Nolasco');
INSERT INTO public.professor VALUES (4, 'Eduardo Passos');
INSERT INTO public.professor VALUES (5, 'Ana Maria da Silva');
INSERT INTO public.professor VALUES (6, 'João Pedro dos Santos');


--
-- Data for Name: semester; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.semester VALUES (1, '1°');
INSERT INTO public.semester VALUES (2, '2°');
INSERT INTO public.semester VALUES (3, '3°');
INSERT INTO public.semester VALUES (4, '4°');
INSERT INTO public.semester VALUES (5, '5°');
INSERT INTO public.semester VALUES (6, '6°');
INSERT INTO public.semester VALUES (7, '7°');
INSERT INTO public.semester VALUES (8, '8°');
INSERT INTO public.semester VALUES (9, '9°');
INSERT INTO public.semester VALUES (10, '10°');
INSERT INTO public.semester VALUES (11, 'Eletivas');


--
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subject VALUES (1, 'Interface com campos afins', 1);
INSERT INTO public.subject VALUES (2, 'Sociedade Brasileira e África', 2);
INSERT INTO public.subject VALUES (3, 'Clínica, corpo e discurso médico', 2);
INSERT INTO public.subject VALUES (4, 'Metodologia de pesquisa aplicada à psicologia', 3);
INSERT INTO public.subject VALUES (5, 'Psicopatologia', 3);
INSERT INTO public.subject VALUES (6, 'Psicologia e estudos da deficiência', 3);
INSERT INTO public.subject VALUES (7, 'Cognição', 3);
INSERT INTO public.subject VALUES (8, 'Algoritmos e Estrutura de Dados', 4);
INSERT INTO public.subject VALUES (9, 'Fundamentos de Redes de Computadores', 4);
INSERT INTO public.subject VALUES (10, 'Programação Orientada a Objetos', 4);


--
-- Data for Name: subject_professor; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subject_professor VALUES (1, 1, 1, 1);
INSERT INTO public.subject_professor VALUES (2, 1, 2, 1);
INSERT INTO public.subject_professor VALUES (3, 1, 3, 1);
INSERT INTO public.subject_professor VALUES (4, 1, 4, 1);
INSERT INTO public.subject_professor VALUES (5, 2, 2, 1);
INSERT INTO public.subject_professor VALUES (6, 2, 3, 1);
INSERT INTO public.subject_professor VALUES (7, 3, 1, 1);
INSERT INTO public.subject_professor VALUES (8, 4, 3, 1);
INSERT INTO public.subject_professor VALUES (9, 5, 2, 1);
INSERT INTO public.subject_professor VALUES (10, 5, 4, 1);
INSERT INTO public.subject_professor VALUES (11, 6, 2, 1);
INSERT INTO public.subject_professor VALUES (12, 6, 4, 1);
INSERT INTO public.subject_professor VALUES (13, 7, 4, 1);
INSERT INTO public.subject_professor VALUES (14, 8, 5, 2);
INSERT INTO public.subject_professor VALUES (15, 8, 6, 2);
INSERT INTO public.subject_professor VALUES (16, 9, 5, 2);
INSERT INTO public.subject_professor VALUES (17, 10, 6, 2);


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.category_id_seq', 5, true);


--
-- Name: course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.course_id_seq', 2, true);


--
-- Name: professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.professor_id_seq', 6, true);


--
-- Name: semester_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.semester_id_seq', 11, true);


--
-- Name: subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subject_id_seq', 10, true);


--
-- Name: subject_professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subject_professor_id_seq', 17, true);


--
-- Name: test_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.test_id_seq', 1, false);


--
-- Name: category category_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_name_key UNIQUE (name);


--
-- Name: category category_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pk PRIMARY KEY (id);


--
-- Name: course course_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pk PRIMARY KEY (id);


--
-- Name: professor professor_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professor
    ADD CONSTRAINT professor_name_key UNIQUE (name);


--
-- Name: professor professor_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professor
    ADD CONSTRAINT professor_pk PRIMARY KEY (id);


--
-- Name: semester semester_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semester
    ADD CONSTRAINT semester_pk PRIMARY KEY (id);


--
-- Name: subject subject_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_name_key UNIQUE (name);


--
-- Name: subject subject_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_pk PRIMARY KEY (id);


--
-- Name: subject_professor subject_professor_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject_professor
    ADD CONSTRAINT subject_professor_pk PRIMARY KEY (id);


--
-- Name: test test_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pk PRIMARY KEY (id);


--
-- Name: subject subject_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_fk0 FOREIGN KEY ("semesterId") REFERENCES public.semester(id);


--
-- Name: subject_professor subject_professor_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject_professor
    ADD CONSTRAINT subject_professor_fk0 FOREIGN KEY ("subjectId") REFERENCES public.subject(id);


--
-- Name: subject_professor subject_professor_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject_professor
    ADD CONSTRAINT subject_professor_fk1 FOREIGN KEY ("professorId") REFERENCES public.professor(id);


--
-- Name: subject_professor subject_professor_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject_professor
    ADD CONSTRAINT subject_professor_fk2 FOREIGN KEY ("courseId") REFERENCES public.course(id);


--
-- Name: test test_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_fk0 FOREIGN KEY ("categoryId") REFERENCES public.category(id);


--
-- Name: test test_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_fk1 FOREIGN KEY ("subjectId") REFERENCES public.subject(id);


--
-- Name: test test_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_fk2 FOREIGN KEY ("professorId") REFERENCES public.professor(id);


--
-- PostgreSQL database dump complete
--

