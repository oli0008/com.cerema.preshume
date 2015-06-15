/* combo services */

select Kuni, LibSubc, LibSub 
from subdis 
where archive = 0 
and Kuni =  {RECHERCHE}


/* combo services 
select Kuni, LibSubc, LibSub  
from subdis 
where archive = 0 
and Kuni = 13		// user select Kuni = 13 -- result = 6 
*/