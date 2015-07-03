/*	and
	e.Kets = {P_ETABLIS}*/
/* e.Kets = 1 == DTerMed */
/* u.Kuni = 5 == LAP */
/* s.Ksub = 47 == SGRN */	

select 
	a.Nom, a.Prenom, a.Matri, a.Kage, a.id_residence, a.id_metier, a.id_contrat_travail,
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
	e.Kets = 1
order by a.Nom, a.Prenom,e.Kets, u.Kuni, s.Ksub