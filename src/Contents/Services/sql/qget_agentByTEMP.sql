/* Effectifs physiques à l'instant présent */
/* groupés par Unité & par grades */

/* NOTE: la table agents représente les éffectifs à l'instant T. */



select 
	agents.nom, agents.prenom, agents.matri, etablissements.Kets, etablissements.LibSubC, unites.Kuni, unites.LibSubC, subdis.Ksub, subdis.LibSubC
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
/*	and 
	etablissements.Kets = 1	*/ /* LibEtsC est NULL pour Kets = 6, Kets = 1 == DTerMed */
/*	and
	unites.Kuni = 11 */ 	/*selecteur d'unité */
	and
	subdis.Ksub = 333	/* xxx */
	and
	unites.Kuni = 	{RECHERCHE}	
/*	
group by 
	unites.LibUnic,
	grades.kcgr
*/