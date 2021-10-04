package org.jiangwen.common.exception;


import lombok.extern.slf4j.Slf4j;
import org.jiangwen.common.lang.ApiRestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理
 */
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    // 实体校验异常
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ApiRestResponse handler(MethodArgumentNotValidException e) {

        BindingResult result = e.getBindingResult();
        ObjectError objectError = result.getAllErrors().stream().findFirst().get();
        log.error("实体校验异常：----------------{}", objectError.getDefaultMessage());
        return ApiRestResponse.error(objectError.getDefaultMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = IllegalArgumentException.class)
    public ApiRestResponse handler(IllegalArgumentException e) {
        log.error("Assert异常：----------------{}", e.getMessage());
        return ApiRestResponse.error(e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = RuntimeException.class)
    public ApiRestResponse handler(RuntimeException e) {
        log.error("运行时异常：----------------{}", e);
        return ApiRestResponse.error(e.getMessage());
    }
}
