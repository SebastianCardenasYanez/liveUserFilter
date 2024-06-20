export const getAllitems = async() =>{
    const res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/user`);
    const data = res.json();
    return data
}