import React,{useState} from 'react'
import PageLayout from '../components/PageLayout';
import { Skeleton, Switch, Card, Avatar } from 'antd';
const { Meta } = Card;

const Home = () => {

  const [loading, setLoading] = useState(false)

  return (
    <PageLayout>
      <div className="">
        <div className="row">
          <div className="col-8">
            <div className="row">
            <Card style={{ width: 500, marginTop: 16 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="The begining of the end"
                description="This is the description"
              />
              </Card>
            </div>

            <div className="row">
            <Card style={{ width: 500, marginTop: 16 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="The end of all men"
                description="This is the description"
              />
              </Card>
            </div>


            <div className="row">
            <Card style={{ width: 500, marginTop: 16 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Calculate your class"
                description="This is the description"
              />
              </Card>
            </div>

            <div className="row">
            <Card style={{ width: 500, marginTop: 16 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="What is your name"
                description="This is the description"
              />
              </Card>
            </div>

            <div className="row">
            <Card style={{ width: 500, marginTop: 16 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Where is your class"
                description="This is the description"
              />
              </Card>
            </div>
        </div>
        <div className="col-4"></div>
        </div>

      <br/>
      <br/>

      </div>
    </PageLayout>
  )
}

export default Home;