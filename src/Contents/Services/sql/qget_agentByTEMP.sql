select 
	a.Nom, a.Prenom, a.Matri, 
	e.Kets, e.LibEts, 
	u.Kuni, u.LibUnic, 
	s.Ksub, s.LibSubC
from 
	agents a
	join unites u
		on u.Kuni = a.Kuni 
	join subdis s
		on s.Ksub = a.Ksub 	
	join etablissements e
		on e.Kets = u.Kets
where 
	a.actif = 1 
	and 
	a.kgra <> 66 		/* stagiaire */
	and 
	a.kgra <> 67 		/* vacataire */
	and
	e.archive = 0
	and
	u.archive = 0
	and
	s.archive = 0
	and 
	e.Kets = 1		/* e.Kets = 1 == DTerMed */
	and
	u.Kuni = 5		/* u.Kuni = 5 == LAP */
	and
	s.Ksub = 47 	/* s.Ksub = 47 == SGRN */
	
/*	
	and
	e.Kets = {P_ETABLIS}		
	and
	u.Kuni = {P_UNITE}			
	and
	s.Ksub = {P_SERVICE}		
*/

/* e.Kets = 1 == DTerMed */
/* u.Kuni = 5 == LAP */
/* s.Ksub = 47 == SGRN */

/* ***************** */

select 
	agents.nom, agents.prenom, agents.matri, 
	etablissements.Kets, etablissements.LibEts, 
	unites.Kuni, unites.LibUnic, 
	subdis.Ksub, subdis.LibSubC
from 
	agents 
	join unites 
			on unites.Kuni = agents.Kuni 
	join subdis 
			on subdis.Ksub = agents.Ksub 
/*	join catgrad 
			on catgrad.Kcgr = grades.kcgr 
*/			
	join etablissements
			on etablissements.Kets = unites.Kets
where 
	agents.actif=1 
	and 
	agents.kgra<>66 	/* stagiaire */
	and 
	agents.kgra<>67 	/* vacataire */
	and
	etablissements.archive = 0
	and
	unites.archive = 0
	and
	subdis.archive = 0
	and 
	etablissements.Kets = 1		/* 1 == DTerMed */
	and
	unites.Kuni = 5				/* 5 == LAP */
	and
	subdis.Ksub = 47 			/* 47 == SGRN */
/*	
	and
	unites.Kuni = 	{RECHERCHE}	
*/