/* Grand totals */
/* Effectifs physiques à l'instant présent */
select LibUnic, sum(CountAge) as GrandTotal
from e_phys_present
where LibUnic Like 'SG' 
/* where LibUnic = {RECHERCHE}	*/
group by LibUnic