export function capitalize(str){
    str = str.replace(/_/g, " ");
    str = str.replace("greaterthan", ">");
    return str[0].toUpperCase() + str.slice(1)
}

export function calculateperiod(start_date, completion_date, design_period){
    let period;
    if(design_period){
        period = design_period
    }else{
        start_date === completion_date ? period = start_date : period = start_date + " - " + completion_date
    }
    return period;
}