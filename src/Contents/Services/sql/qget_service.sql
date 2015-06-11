/* combo services */

select kuni, LibSubc, LibSub 
from subdis 
where archive = 0 
and kuni =  {RECHERCHE}


/* combo services 
select kuni, LibSubc, LibSub  
from subdis 
where archive = 0 
and kuni = 13		// user select kuni = 13 -- result = 6 
*/