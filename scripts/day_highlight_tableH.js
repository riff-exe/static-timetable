document.addEventListener('DOMContentLoaded', function() {
	// For the Horizontal Table
	const timeTableH = document.getElementById('time-table-h');
	if (timeTableH) {
		const dayHeadersH = Array.from(timeTableH.querySelectorAll('.day-header'));
		dayHeadersH.forEach(header => {
			header.addEventListener('click', function() {
				// Toggle highlight state
				curr_state = this.classList.contains('day-header-active');
				
				// Clear active status from table
				timeTableH.querySelectorAll('.day-highlight').forEach(td => {
					td.classList.remove('day-highlight');
				});

				// Clear active status from headers
				dayHeadersH.forEach(h => h.classList.remove('day-header-active'));
				
				// Use the clicked row directly; it already contains the cells for that day
				if (!curr_state) {
					this.classList.add('day-header-active');
					
					const row = this.parentElement;
					const rowcells = Array.from(row.querySelectorAll('.card-type-active'))

					rowcells.forEach(cell => {
						cell.classList.add('day-highlight');
					});
				}
			});
		});
	} else console.warn("Script cannot find `time-table-h`");
});