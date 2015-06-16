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
order by a.Nom, a.Prenom,e.Kets, u.Kuni, s.Ksub