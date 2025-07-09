function getQueryParam(name) {
          const params = new URLSearchParams(window.location.search);
          return params.get(name);
        }
        
        const key = getQueryParam("key");
        const expiry = parseInt(getQueryParam("expiry"));
        const now = Date.now();
        
        const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";
        
        document.getElementById("regForm").addEventListener("submit", async function (e) {
          e.preventDefault();
        
          if (!key || now > expiry) {
            alert("🔒 Link is invalid or expired.");
            return;
          }
        
          const formData = new FormData(e.target);
          const data = {};
          formData.forEach((value, name) => {
            data[name] = value;
          });
        
          try {
            const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data)
            });
        
            if (response.ok) {
              alert("✅ Submitted successfully!");
              window.location.href = "https://facebook.com/pamainternationalschool";
            } else {
              alert("❌ Failed to submit. Please try again.");
            }
          } catch (err) {
            alert("⚠️ Error: " + err.message);
          }
        });
        