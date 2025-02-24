script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sora: ['sora', 'serif'],
            poppins: ["Poppins", "serif"],
          },

          
        },
        plugins: [
          require('daisyui'),
        ],
        daisyui: {
          themes: [
            {
              mytheme: {
                primary: '#ffffff',
              },
            },
          ],
        },

      }
    }
  </script>