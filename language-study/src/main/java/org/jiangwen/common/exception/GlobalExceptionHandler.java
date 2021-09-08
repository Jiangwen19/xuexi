package org.jiangwen.common.exception;


import lombok.extern.slf4j.Slf4j;
import org.jiangwen.common.lang.ApiRestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理
 */
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {


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
