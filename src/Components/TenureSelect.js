import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const TenureSelect = ({data, setData}) =>{
    const handleChange = (e) =>{
        setData({...data, loanTerm: e.target.value});
    }
    return (
        <FormControl fullWidth>
            <InputLabel id={'demo-simple-select-label'}>Tenure</InputLabel>
            <Select
            labelId={'demo-simple-select-label'}
            id={'demo-simple-select'}
            value={data.loanTerm}
            label={'Tenure'}
            defaultValue={5}
            onChange={handleChange}>
                <MenuItem value={5}>5 years</MenuItem>
                <MenuItem value={10}>10 year</MenuItem>
                <MenuItem value={15}>15 year</MenuItem>
                <MenuItem value={20}>20 year</MenuItem>
                <MenuItem value={25}>25 year</MenuItem>
            </Select>
        </FormControl>
    );

}
export default TenureSelect;