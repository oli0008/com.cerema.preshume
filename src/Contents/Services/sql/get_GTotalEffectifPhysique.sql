/* Grand totals */
/* Effectifs physiques à l'instant présent */
select LibUnic, sum(CountAge) as GrandTotal
from e_phys_present
group by LibUnic