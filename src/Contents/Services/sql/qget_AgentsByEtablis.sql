/* selectionne tous les agents en fonction qui ne sont ni vacataires ni stagiaires */
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
order by a.Nom, a.Prenom,e.Kets, u.Kuni, s.Ksub