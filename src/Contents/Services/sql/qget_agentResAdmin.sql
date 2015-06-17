select r.id_residence, concat(rue_residence, "'" - "'", ville_residence) as rue_ville_residence 
from residence_admin r
	join agents a
		on r.id_residence = a.id_residence
