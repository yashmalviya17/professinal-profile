import React from 'react'
import {Space,Button} from 'antd'
const LoadReset = ({setSliceValue,sliceValue}) => {
    return (
        <div className="button-div">
        <Space size="large">
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => {
              setSliceValue(sliceValue + 9);
            }}
          >
            Load More
          </Button>
          <Button
            type="primary"
            shape="round"
            danger
            size="large"
            disabled={sliceValue === 9 ? true : false}
            onClick={() => {
              setSliceValue(9);
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    )
}

export default LoadReset
