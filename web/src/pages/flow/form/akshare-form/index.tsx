import TopNItem from '@/components/top-n-item';
import { Form } from 'antd';
import { IOperatorForm } from '../../interface';
import DynamicInputVariable from '../components/dynamic-input-variable';

const AkShareForm = ({ onValuesChange, form, node }: IOperatorForm) => {
  return (
    <Form
      name="basic"
      autoComplete="off"
      form={form}
      onValuesChange={onValuesChange}
      layout={'vertical'}
    >
      <DynamicInputVariable node={node}></DynamicInputVariable>
      <TopNItem initialValue={30} max={1000}></TopNItem>
    </Form>
  );
};

export default AkShareForm;
