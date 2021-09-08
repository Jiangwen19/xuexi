package org.jiangwen.common.lang;

import lombok.Data;
import org.jiangwen.common.exception.ExceptionEnum;

import java.io.Serializable;

@Data
public class ApiRestResponse<T> implements Serializable {
    /*定义属性*/
    private Integer status;

    private String msg;

    private T data;
    /*定义常量*/
    private static final int OK_CODE = 200;

    private static final int FAIL_CODE = 400;

    private static final String OK_MSG = "SUCCESS";

    /*构造函数→3参数*/
    public ApiRestResponse(Integer status, String msg, T data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    /*构造函数→2参数*/
    public ApiRestResponse(Integer status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    /*构造函数→无参，无参构造函数构造的对象默认成功*/
    public ApiRestResponse() {
        this(OK_CODE, OK_MSG);
    }

    public static <T> ApiRestResponse<T> success() {
        return new ApiRestResponse<>();
    }

    public static <T> ApiRestResponse<T> success(T result) {
        return new ApiRestResponse<>(OK_CODE, OK_MSG, result);
    }

    public static <T> ApiRestResponse<T> error(String msg) {
        return new ApiRestResponse<>(FAIL_CODE, msg);
    }

    public static <T> ApiRestResponse<T> error(ExceptionEnum ex) {
        return new ApiRestResponse<>(ex.getCode(), ex.getMsg());
    }

}
