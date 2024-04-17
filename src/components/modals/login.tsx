import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Modal } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const validateSchema = z.object({
  email: z.string().email({ message: "Vui lòng nhập đúng định dạng email" }),
});

type ValidateSchemaType = z.infer<typeof validateSchema>;

interface LoginModalProps {
  isShow: boolean;
  onClose: () => void;
}

const LoginModal: React.FunctionComponent<LoginModalProps> = ({
  isShow,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidateSchemaType>({
    resolver: zodResolver(validateSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ValidateSchemaType> = (data) =>
    console.log(data);

  return (
    <Modal
      open={isShow}
      title={
        <Flex align="center" justify="center" className="text-20 text-bold">
          Đăng nhập hoặc Đăng ký
        </Flex>
      }
      maskClosable={false}
      centered={true}
      onCancel={onClose}
      footer={null}
      afterClose={reset}
    >
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Flex align="center" gap={20} vertical className="w-full">
          <p className="text">
            Vui lòng đăng nhập để hưởng những đặc quyền dành cho thành viên.
          </p>
          <Flex vertical align="flex-start" className="w-17/20" gap={5}>
            <input
              autoComplete="off"
              type="text"
              placeholder="Nhập email"
              {...register("email")}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </Flex>
          <Button type="primary" htmlType="submit" className="btn-submit">
            Tiếp tục
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default LoginModal;
