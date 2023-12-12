/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["public/**/*.html"],
    theme: {
        extend: {
            colors: {
                m: {
                    text: {
                        1: "#d3f8f1",
                        2: "#e6fef9ab",
                        3: "#40f7d1d3"
                    },
                    //background: "#0c0a19",
                    background: "#0d805562",
                    primary: "#0d8055",
                    secondary: "#1c11aa",
                    accent: "#de2144"
                },
                trans: {
                    50: "rgba(255,255,255,0.05)",
                    100: "rgba(255,255,255,0.1)",
                    200: "rgba(255,255,255,0.2)",
                    300: "rgba(255,255,255,0.3)",
                    400: "rgba(255,255,255,0.4)",
                    500: "rgba(255,255,255,0.5)",
                    ember: "rgba(243,150,9,0.5)",
                    b: {
                        50: "rgba(0,0,0,0.05)",
                        100: "rgba(0,0,0,0.1)",
                        200: "rgba(0,0,0,0.2)",
                        300: "rgba(0,0,0,0.3)",
                        400: "rgba(0,0,0,0.4)",
                        500: "rgba(0,0,0,0.5)"
                    }
                },
                text: {
                    white: "#fff",
                    ember: "#F39609",
                    colun: {
                        100: "#625CB3",
                        200: "#5246DD",
                        300: "#5D5F93"
                    }
                },
                button: {
                    bg: {
                        1: "#5348DA"
                    }
                }
            },
            fontFamily: {
                poppins: ["Poppins", "Sans-Serif"],
                ubantu: ["Ubuntu", "Sans-Serif"]
            },
            spacing: {
              95: '95%',
              92: '92%',
              90: '90%',
              80: '80%',
              85: '85%',
              70: '70%',
              75: '75%',
              65: '65%',
              
              900: '700px'
            },
            screen: {
              md2: '890px'
            }
        }
    },
    plugins: []
};
