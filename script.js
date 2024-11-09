//new
         document.getElementById('registration-form').addEventListener('submit', function(e) {
            e.preventDefault();    
            const formData = new FormData(this);
            let confirmationHTML = '<h3>Submitted Information:</h3>';
            
            for (let [key, value] of formData.entries()) {
                confirmationHTML += `<p><strong>${key.replace('_', ' ').toUpperCase()}:</strong> ${value}</p>`;
            }
            
            
            document.getElementById('confirmation-details').innerHTML = confirmationHTML;
            document.getElementById('confirmation-screen').style.display = 'block';
        });

        function showThankYouScreen() {
            document.getElementById('confirmation-screen').style.display = 'none';
            document.getElementById('thank-you-screen').style.display = 'block';
        }

        function closeThankYouScreen() {
            document.getElementById('thank-you-screen').style.display = 'none';
            document.getElementById('registration-form').reset();
        }
