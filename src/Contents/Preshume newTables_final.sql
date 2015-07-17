/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  05/06/2015 16:01:15                      */
/*                                                              */
/* Objet: définition des tables, clefs primaires, secondaires,  */ 
/* 	      indexes et contraintes de validation.                 */
/*==============================================================*/


drop table if exists contrat_travail;
drop table if exists type_contrat;

drop table if exists residence_admin;

drop table if exists effectif_etp;
drop table if exists effectif_physique;

drop table if exists metier;
drop table if exists poste_precedent;

drop table if exists intervenir;
drop table if exists thematiques;
drop table if exists domaine;


/*==============================================================*/
/* Table : intervenir                                           */
/*==============================================================*/
create table intervenir
(
   Kage            	int not null,
   id_thematique	int not null,
   primary key (Kage, id_thematique)
);


/*==============================================================*/
/* Table : contrat_travail                                	    */
/*==============================================================*/
create table contrat_travail
(
   id_contrat_travail   int not null AUTO_INCREMENT,
   Kage             	int not null,	
   id_type_contrat      int not null,
   numero_contrat	    varchar(5) not null,
   salaire              numeric(8,2) not null,
   date_debut_contrat   date not null,
   desc_poste           varchar(50) not null,
   primary key (id_contrat_travail)
);


/*==============================================================*/
/* Table : domaine  imported from gestionao.domaine   			*/
/*==============================================================*/
create table domaine	
(
   id_domaine			int not null AUTO_INCREMENT,
   nom_domaine          varchar(50) not null,
   primary key (id_domaine)
);

alter table domaine comment 'ex:  informatique';

/*==============================================================*/
/* Table : effectif_etp                                         */
/*==============================================================*/
create table effectif_etp 
(
   id_effectif_etp      int not null AUTO_INCREMENT,
   Kets  				int not null,
   Kuni  				int not null, 
   Ksub  				int not null,     
   sum_quot             decimal(5,2) not null,
   lib_categorie_etp    varchar(50) not null,
   lib_departement_etp  varchar(50) not null,
   date_etp             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   primary key (id_effectif_etp)
);

/*==============================================================*/
/* Table : effectif_physique                                    */
/*==============================================================*/
create table effectif_physique 
(
   id_effectif_physique int not null AUTO_INCREMENT,
   Kets  				int not null,
   Kuni  				int not null, 
   Ksub  				int not null,  
   count_agent          numeric(4,0) not null,
   lib_categorie_ep    	varchar(50) not null,
   lib_departement_ep  	varchar(50) not null,
   date_ep              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   primary key (id_effectif_physique)
);

/*==============================================================*/
/* Table : metier                                               */
/*==============================================================*/
create table metier 
(
   id_metier            int not null AUTO_INCREMENT,
   nom_metier           varchar(50) not null,
   primary key (id_metier)
);

alter table metier comment 'ex: développeur informatique';


/*==============================================================*/
/* Table : poste_precedent                                      */
/*==============================================================*/
create table poste_precedent 
(
   id_poste             int not null AUTO_INCREMENT,
   Kage             	int not null,	
   nom_poste            varchar(50) not null,
   date_debut_poste     date not null,
   date_fin_poste       date not null,
   primary key (id_poste)
);


/*==============================================================*/
/* Table : residence_admin                                      */
/*==============================================================*/
create table residence_admin 
(
   id_residence          	int not null AUTO_INCREMENT,
   rue_residence         	varchar(50) not null,
   ville_residence       	varchar(50) not null,
   code_postal_residence  	varchar(5) not null,
   primary key (id_residence)
);


/*==============================================================*/
/* Table : thematiques   imported from gestionao.thematiques    */
/*==============================================================*/
create table thematiques 
(
   id_thematique         	int not null AUTO_INCREMENT,
   id_domaine 			 	int not null,	
   nom_thematique        	varchar(50) not null,
   primary key (id_thematique)
);


/*==============================================================*/
/* Table : type_contrat                                      */
/*==============================================================*/
create table type_contrat 
(
   id_type_contrat      int not null AUTO_INCREMENT,
   type_contrat         varchar(50) not null,
   primary key (id_type_contrat)
);

alter table type_contrat comment 'ex: CDI, CDD, Stagiaire';


/*==============================================================*/
/* New columns				                                    */
/*==============================================================*/
ALTER TABLE agents
ADD (id_residence int, id_metier int, id_contrat_travail int); 

/*==============================================================*/
/* Foreign keys				                                    */
/*==============================================================*/
alter table agents add constraint fk_agents33 foreign key (id_residence)
      references residence_admin (id_residence) on delete cascade;

alter table agents add constraint fk_agents34 foreign key (id_metier)
      references metier (id_metier) on delete cascade;

alter table agents add constraint fk_agents35 foreign key (id_contrat_travail)
      references contrat_travail (id_contrat_travail) on delete cascade;

alter table intervenir add constraint fk_intervenir foreign key (id_thematique)
      references thematiques (id_thematique) on delete cascade;

alter table intervenir add constraint fk_intervenir2 foreign key (Kage)
      references agents (Kage) on delete cascade;

alter table contrat_travail add constraint fk_avoir_5 foreign key (Kage)
      references agents (Kage) on delete cascade;

alter table contrat_travail add constraint fk_definir foreign key (id_type_contrat)
      references type_contrat (id_type_contrat) on delete cascade;
/***/		
alter table effectif_etp add constraint fk_avoir_26 foreign key (Kets)
		references etablissements (Kets) on delete cascade;

alter table effectif_etp add constraint fk_avoir_27 foreign key (Kuni)
		references unites (Kuni) on delete cascade;
		
alter table effectif_etp add constraint fk_avoir_28 foreign key (Ksub)
		references subdis (Ksub) on delete cascade;
/***/		
alter table effectif_physique add constraint fk_avoir_45 foreign key (Kets)
		references etablissements (Kets) on delete cascade;
		
alter table effectif_physique add constraint fk_avoir_46 foreign key (Kuni)
		references unites (Kuni) on delete cascade;
		
alter table effectif_physique add constraint fk_avoir_47 foreign key (Ksub)
		references subdis (Ksub) on delete cascade;
/***/		
alter table poste_precedent add constraint fk_avoir_23 foreign key (Kage)
      references agents (Kage) on delete cascade;

alter table thematiques add constraint fk_appartenir_5 foreign key (id_domaine)
      references domaine (id_domaine) on delete cascade;
  
	  
/*==============================================================*/
/* Constraints                                              	*/
/*==============================================================*/
alter table poste_precedent add constraint ck_avoir_233 CHECK (date_fin_poste >= date_debut_poste);
alter table poste_precedent add constraint ck_avoir_234 CHECK (date_debut_poste <= date_fin_poste);


/*==============================================================*/
/* Indexes                                              		*/
/*==============================================================*/
ALTER TABLE agents
ADD INDEX idx_agents_22 (id_residence); 

ALTER TABLE agents
ADD INDEX idx_agents_23 (id_metier);  

ALTER TABLE agents
ADD INDEX idx_agents_24 (id_contrat_travail);  

ALTER TABLE poste_precedent
ADD INDEX idx_poste_precedent_22 (Kage); 

/********/

ALTER TABLE effectif_physique
ADD INDEX idx_effectif_physique_22 (Kets); 

ALTER TABLE effectif_physique
ADD INDEX idx_effectif_physique_23 (Kuni); 

ALTER TABLE effectif_physique
ADD INDEX idx_effectif_physique_24 (Ksub); 

/********/

ALTER TABLE effectif_etp
ADD INDEX idx_effectif_etp_22 (Kets); 

ALTER TABLE effectif_etp
ADD INDEX idx_effectif_etp_23 (Kuni); 

ALTER TABLE effectif_etp
ADD INDEX idx_effectif_etp_24 (Ksub); 

/********/


ALTER TABLE intervenir
ADD INDEX idx_intervenir_22 (Kage); 
 
ALTER TABLE intervenir
ADD INDEX idx_intervenir_23 (id_thematique); 
 
ALTER TABLE thematiques
ADD INDEX idx_thematiques_22 (id_domaine); 

ALTER TABLE contrat_travail
ADD INDEX idx_contrat_travail_22 (Kage); 

ALTER TABLE contrat_travail
ADD INDEX idx_contrat_travail_23 (id_type_contrat); 


/*==============================================================*/
/* Inserts          											*/
/*==============================================================*/
/* note: id_type_contrat is auto_increment */
INSERT INTO type_contrat (type_contrat) 
VALUES
	('CDI'), 
	('CDD'), 
	('Stagiaire');

/* note: id_domaine is auto_increment */
INSERT INTO domaine (nom_domaine) 
VALUES
	('Risques'),
	('Environnement'),
	('Mobilité'),
	('Aménagement');

/* note: id_thematique is auto_increment */
INSERT INTO thematiques (id_domaine, nom_thematique) 
VALUES
	(1, 'Risques naturels'),
	(1, 'Risques industriels'),
	(1, 'Vulnérabilité et gestion de crise'),
	(2, 'Ressources et biodiversité'),
	(2, 'Impacts sur la santé'),
	(2, 'Energie - Climat'),
	(2, 'Matériaux'),
	(3, 'Connaissance de la mobilité'),
	(3, 'Infrastructures de transport'),
	(3, 'Transports et intermodalité'),
	(3, 'Sécurité des transports'),
	(4, 'Ville et territoires'),
	(4, 'Bâtiments durables'),
	(4, 'Accessibilité'),
	(4, 'Observation - données'),
	(4, 'Espace urbain');

/*
	(1, 1, 'Risques naturels'),
	(2, 1, 'Risques industriels'),
	(3, 1, 'Vulnérabilité et gestion de crise'),
	(4, 2, 'Ressources et biodiversité'),
	(5, 2, 'Impacts sur la santé'),
	(6, 2, 'Energie - Climat'),
	(7, 2, 'Matériaux'),
	(8, 3, 'Connaissance de la mobilité'),
	(9, 3, 'Infrastructures de transport'),
	(10, 3, 'Transports et intermodalité'),
	(11, 3, 'Sécurité des transports'),
	(12, 4, 'Ville et territoires'),
	(13, 4, 'Bâtiments durables'),
	(14, 4, 'Accessibilité'),
	(15, 4, 'Observation - données'),
	(16, 4, 'Espace urbain');	
*/	
	
	