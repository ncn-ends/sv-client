module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            borderWidth: {
                "1": "1px"
            },
            zIndex: {
                '-5': '-5',
                '-10': '-10',
            },
            fontSize: {
                '3xs': '.5rem',
                '2xs': '.625rem',
                '1/2sm': '.925rem',
                'md': '1rem'
            },
            boxShadow: {
                "inner-md": "inset 0 0 6px 3px rgba(6, 6, 6, .4)"
            },
            colors: {
                'black-faded': "rgba(6, 6, 6, .7)"
            },
            listStyleType: {
                "circle": "circle"
            }
        },
        flex: {
            2: 'calc(50% - (.25rem * 2));',
            3: 'calc(33% - (.75rem * 2));',
            4: 'calc(10% - (.75rem * 2));',
            "profile-history": '1 1 45%'
        },
    },
    variants: {
        extend: {},
    },
    mode: 'jit',
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['dark'],
    },
};
