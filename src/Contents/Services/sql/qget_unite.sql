/* combo unites */
select kuni, LibUnic, LibUni 
from unites
where archive = 0
and kets = {RECHERCHE}
/*
and kets = 1		
*/
/* user select kets = 1 -- result = 10 */