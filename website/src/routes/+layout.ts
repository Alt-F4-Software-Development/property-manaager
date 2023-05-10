export const load = (({ params }) => {
    console.log(params);
    const name = params.property;
    return {name};
}) 