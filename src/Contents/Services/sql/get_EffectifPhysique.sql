/* Effectifs physiques à l'instant présent */
/* groupés par Unité & par grades */

/* NOTE: la table agents représente les éffectifs à l'instant T. */



select 
	catgrad.LibCgr,
	count(agents.kage) as agentTotal, 
	unites.LibUnic 
from 
	agents 
	join unites 
			on unites.Kuni=agents.Kuni 
	join grades 
			on grades.kgra=agents.kgra 
	join catgrad 
			on catgrad.Kcgr=grades.kcgr 
	join etablissements
			on etablissements.Kets = unites.Kets
where 
	agents.actif=1 
	and 
	agents.kgra<>66 
	and 
	agents.kgra<>67 
	and
	etablissements.archive = 0
	and
	unites.archive = 0
/*	and 
	etablissements.Kets = 1	/* LibEtsC est NULL pour Kets = 6, Kets = 1 == DTerMed */
/*	and
	unites.Kuni = 11 */ 	/*selecteur d'unité */
	unites.Kuni = 	{RECHERCHE}	
	
group by 
	unites.LibUnic,
	grades.kcgr