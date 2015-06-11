/* combo services */

/*
select kuni, LibUnic, LibUni 
from unites
where archive = 0
and kets = {RECHERCHE}
*/
/*
and kets = 1		
*/
/* user select kets = 1 -- result = 10 */


select kuni, LibSubc, LibSub 
from subdis 
where archive = 0 
and kuni =  {RECHERCHE}
/*
and kuni = "' + o.id_Service + '" ',cb);
*/