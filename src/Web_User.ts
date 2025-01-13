import { UserState } from "./UserState"

class WebUser {
    private login_id:string
    private password:string
    private state: UserState

    constructor(login_id:string, password:string){
        this.login_id = login_id
        this.password = password
        this.state = UserState.NEW
    }

    public getId():string{
        return this.login_id
    }

    public getState():UserState {
        return this.state
    }

    public setId(state: string):void{
        this.login_id = this.login_id
    }

    public setPassword(password:string):void{
        this.password = password
    }

    public setState(state:UserState){
        this.state = state
    }

    public toString():string{
        return `ID = ${this.login_id} State = ${this.state}`
    }
}

export{WebUser}