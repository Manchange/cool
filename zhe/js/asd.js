function run(n){
    if(n<1){
        return
    }
    run(--n);
    console.log(n);
}(5)