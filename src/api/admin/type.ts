
export interface AdminRes{
  limit: number;
  page: number;
  total: number;
  data:AdminList[]
}

export interface AdminList{
  id: number
  name: string 
}