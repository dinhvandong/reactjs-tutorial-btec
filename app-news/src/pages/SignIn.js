function SigIn(){


    const onChangeUserName = (e)=>{
        e.preventDefault();
        console.log(e.target.value)

    }

    const onChangePassword = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }

    return (
    <div style={{ display:'flex',justifyContent:'center', alignItems:'center'}}>
        <form style={{  }} >
            <label style={{  }}>Enter your name:
            <input onChange={onChangeUserName}
                type="text" 
                name="username" 
            />
            </label>
            <br/>

            <label style={{ }}>Enter password:
                <input  onChange={onChangePassword}
                type="password" 
                name="age" 
                
                />
                </label>
                <br/>

                <input type="submit" />
            </form>

     

    </div>);
}

export default SigIn;
